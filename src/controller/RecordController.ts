import RecordService from "../service/RecordService";
import PhaseService from "../service/PhaseService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import { RecordInter, PhaseInter } from "../interface/RecordInterface";
class RecordController {
  static RecordController: RecordController = new RecordController();
  async getRecordByPersonId(id: number) {
    const menuList = await RecordService.findRecordsByPersonId(id);
    if (menuList) {
      return new SuccessModel(menuList);
    } else {
      return new ErrorModel("not found");
    }
  }
  async getRecordId(id: number) {
    const record = await RecordService.findOneRecordById(id);
    if (record) {
      return new SuccessModel(record);
    } else {
      return new ErrorModel("not found record");
    }
  }
  async addRecord(data: RecordInter) {
    // 添加record记录，获取record_id
    try {
      const res1 = await RecordService.createRecord(data);
      const record_id = res1.dataValues.id;
      try {
        // 使用record_id，添加phase记录
        const formatPhases = (phases: PhaseInter[]) => {
          // 每个phase添加record_id
          return phases.map((phase) => {
            phase.record_id = record_id;
            return phase;
          });
        };
        const formatedPhases = formatPhases(data.phase as any);
        const res2 = await PhaseService.createPhases(formatedPhases);
        return new SuccessModel(res2);
      } catch (error) {
        return new ErrorModel("添加休假日程失败");
      }
    } catch (error) {
      return new ErrorModel("添加休假记录失败");
    }
  }
  async editRecord(data: RecordInter) {
    try {
      const res = await RecordService.updateRecord(data);
      try {
        for (let i = 0; i < (data.phase as PhaseInter[]).length; i++) {
          const phase = (data.phase as PhaseInter[])[i];
          // 如果没有id和record_id就新增
          if (phase.id === undefined && phase["record_id"] === undefined) {
            phase["record_id"] = data.id;
            await PhaseService.createOnePhase(phase);
            continue;
          }
          // 如果有delete_tag就删除
          if (phase.delete_tag) {
            await PhaseService.destroyPhase(phase.id as number);
            continue;
          }
          const res = await PhaseService.updatePhase(phase as PhaseInter);
          console.log("=======", res);
        }
      } catch (error) {
        console.error(error);
        return new ErrorModel("修改休假日程失败");
      }
      return new SuccessModel(res);
    } catch (error) {
      return new ErrorModel("修改休假记录失败");
    }
  }
  async deleteRecord(id: number) {
    try {
      // 级联删除
      // 先获取record_id为id的phases，依次删除
      const res: any = await PhaseService.findAllPhaseByRecordId(id);
      const phases: PhaseInter[] = res.map((item: any) => {
        return item.dataValues;
      });
      try {
        for (let i = 0; i < phases.length; i++) {
          await PhaseService.destroyPhase(phases[i].id as number);
        }
      } catch (error) {
        return new ErrorModel("删除休假日程失败");
      }
      // 后删除record记录
      await RecordService.destroyRecord(id);
      return new SuccessModel("删除休假记录成功");
    } catch (error) {
      console.log(error);
      return new ErrorModel("删除休假记录失败");
    }
  }
}

export default RecordController.RecordController;

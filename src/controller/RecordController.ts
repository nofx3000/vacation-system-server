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
}

export default RecordController.RecordController;

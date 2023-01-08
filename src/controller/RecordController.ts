import RecordService from "../service/RecordService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
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
}

export default RecordController.RecordController;

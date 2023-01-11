import PhaseService from "../service/PhaseService";
import { SuccessModel, ErrorModel } from "../resmodel/ResModel";
import _ from "lodash";
class PhaseController {
  static PhaseController: PhaseController = new PhaseController();
  async getTodayPhases() {
    const res = await PhaseService.findAllTodayPhases();
    // console.log(_.flattenDeep(res));
    console.log(_.flattenDeep(res));

    if (res) {
      return new SuccessModel(res);
    } else {
      return new ErrorModel("not found");
    }
  }
}

export default PhaseController.PhaseController;

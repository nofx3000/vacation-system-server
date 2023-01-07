import PeopleService from "../service/PeopleService";
import { SuccessModel, ErrorModel, BaseModel } from "../resmodel/ResModel";
import { PersonInfoInter } from "../interface/PeopleInterface";

class PeopleController {
  static PeopleController: PeopleController = new PeopleController();
  async getAllPeopleInfoByDivison(): Promise<BaseModel> {
    try {
      const peopleInfoByDivision = await PeopleService.findPeopleByDivision();
      return new SuccessModel(peopleInfoByDivision);
    } catch (error) {
      return new ErrorModel("get peopleInfoByDivision failed");
    }
  }
  async addOnePerson(personInfo: PersonInfoInter): Promise<BaseModel> {
    try {
      const res = await PeopleService.createOnePerson(personInfo);
      return new SuccessModel(res);
    } catch (error) {
      return new ErrorModel("created failed");
    }
  }
}

export default PeopleController.PeopleController;

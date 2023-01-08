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
      return new ErrorModel((error as any).toString());
    }
  }
  async delOnePerson(id: number): Promise<BaseModel> {
    try {
      const res = await PeopleService.destroyOnePerson(id);
      return new SuccessModel(0, res);
    } catch (error) {
      return new ErrorModel((error as any).toString());
    }
  }
  async editOnePerson(personInfo: PersonInfoInter): Promise<BaseModel> {
    try {
      const res = await PeopleService.updateOnePerson(personInfo);
      return new SuccessModel(res);
    } catch (error) {
      return new ErrorModel((error as any).toString());
    }
  }
}

export default PeopleController.PeopleController;

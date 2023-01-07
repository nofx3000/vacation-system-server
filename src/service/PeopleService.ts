import seq from "../db/seq";
import { PersonInfoInter } from "../interface/PeopleInterface";
class PeopleService {
  static PeopleService: PeopleService = new PeopleService();
  private People = seq.models.People;
  private Division = seq.models.Division;
  async findPeopleByDivision() {
    return this.Division.findAll({
      include: [
        {
          model: this.People,
        },
      ],
    });
  }
  async createOnePerson(personInfo: PersonInfoInter) {
    console.log(personInfo);
    return this.People.create(personInfo as any);
  }
}

export default PeopleService.PeopleService;

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
    const res = await this.People.create(personInfo as any);
    return res;
  }
  async destroyOnePerson(id: number) {
    return await this.People.destroy({
      where: {
        id,
      },
    });
  }
  async updateOnePerson(personInfo: PersonInfoInter) {
    const res = await this.People.update(personInfo as any, {
      where: {
        id: personInfo.id,
      },
    });
    return res;
  }
  async findPersonById(id: number) {
    return await this.People.findOne({
      where: {
        id,
      },
    });
  }
  // async updatePersonSpent(id: number, length: number) {
  //   return await this.People.update(
  //     {
  //       spent_holiday: length,
  //     },
  //     {
  //       where: {
  //         id,
  //       },
  //     }
  //   );
  // }
}

export default PeopleService.PeopleService;

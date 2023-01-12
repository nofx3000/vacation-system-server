import seq from "../db/seq";
import { PersonInfoInter } from "../interface/PeopleInterface";
class PeopleService {
  static PeopleService: PeopleService = new PeopleService();
  private People = seq.models.People;
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
  async findAllPeopleInfo() {
    return await this.People.findAll({
      include: [
        {
          model: seq.models.Record,
          include: [
            {
              model: seq.models.Phase,
            },
          ],
        },
        {
          model: seq.models.Division,
        },
      ],
    });
  }
}

export default PeopleService.PeopleService;

import seq from "../db/seq";
class DivisionService {
  static DivisionService: DivisionService = new DivisionService();
  private Division = seq.models.Division;
  async findPeopleByDivision() {
    console.log("----------------", seq.models);
    for (const model in seq.models) {
      console.log(seq.models[model]);
    }
    return this.Division.findAll({
      include: [
        {
          model: seq.models.People,
        },
      ],
    });
  }
  async findAllByDivision() {
    return this.Division.findAll({
      include: [
        {
          model: seq.models.People,
          include: [
            {
              model: seq.models.Record,
              include: [
                {
                  model: seq.models.Phase,
                },
              ],
            },
          ],
        },
      ],
    });
  }
}

export default DivisionService.DivisionService;

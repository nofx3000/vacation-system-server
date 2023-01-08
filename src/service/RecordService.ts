import seq from "../db/seq";
class RecordService {
  static RecordService: RecordService = new RecordService();
  private Record = seq.models.Record;
  private Phase = seq.models.Phase;
  async findRecordsByPersonId(id: number) {
    return this.Record.findAll({
      where: {
        person_id: id,
      },
      include: {
        model: this.Phase,
      },
    });
  }
}

export default RecordService.RecordService;

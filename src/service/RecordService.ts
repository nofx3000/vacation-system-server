import seq from "../db/seq";
import { RecordInter, PhaseInter } from "../interface/RecordInterface";
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
  async createRecord(data: RecordInter) {
    return this.Record.create({
      person_id: data.person_id,
      discount: data.discount,
    });
  }
}

export default RecordService.RecordService;

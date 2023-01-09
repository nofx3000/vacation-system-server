import seq from "../db/seq";
import { RecordInter, PhaseInter } from "../interface/RecordInterface";
class PhaseService {
  static PhaseService: PhaseService = new PhaseService();
  private Phase = seq.models.Phase;
  async createPhases(phases: PhaseInter[]) {
    return this.Phase.bulkCreate(phases as any);
  }
}

export default PhaseService.PhaseService;

import seq from "../db/seq";
import { RecordInter, PhaseInter } from "../interface/RecordInterface";
class PhaseService {
  static PhaseService: PhaseService = new PhaseService();
  private Phase = seq.models.Phase;
  async createOnePhase(phase: PhaseInter) {
    return this.Phase.create(phase as any);
  }
  async createPhases(phases: PhaseInter[]) {
    return this.Phase.bulkCreate(phases as any);
  }
  async updatePhase(phase: PhaseInter) {
    return this.Phase.update(phase, {
      where: {
        id: phase.id,
      },
    });
  }
  async destroyPhase(id: number) {
    return this.Phase.destroy({
      where: {
        id,
      },
    });
  }
  async findAllPhaseByRecordId(id: number) {
    return this.Phase.findAll({
      where: {
        record_id: id,
      },
    });
  }
}

export default PhaseService.PhaseService;

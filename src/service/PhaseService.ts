import seq from "../db/seq";
import { Op } from "sequelize";
import { RecordInter, PhaseInter } from "../interface/RecordInterface";
class PhaseService {
  static PhaseService: PhaseService = new PhaseService();
  private Phase = seq.models.Phase;
  private Record = seq.models.Record;
  private People = seq.models.People;
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
      order: [["start_at", "ASC"]],
    });
  }
  async findAllTodayPhases() {
    const now = new Date();
    return this.Phase.findAll({
      where: {
        start_at: {
          [Op.lte]: now,
        },
        end_at: {
          [Op.gte]: now,
        },
      },
      include: {
        model: this.Record,
        attributes: ["person_id"],
        include: [
          {
            model: this.People,
            attributes: ["name", "total_holiday", "division_id"],
          },
        ],
      },
    });
  }
  async findAllPhases() {
    const year = new Date().getFullYear;
    return this.Phase.findAll({
      where: {},
    });
  }
}

export default PhaseService.PhaseService;

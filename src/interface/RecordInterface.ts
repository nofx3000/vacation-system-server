export interface RecordInter {
  id: number;
  discount?: number;
  person_id: number;
  phases?: PhaseInter[];
}

export interface PhaseInter {
  destination: string;
  traffic?: string;
  tel?: string;
  emergency_tel?: string;
  start_at: Date;
  end_at: Date;
  record_id: number;
}

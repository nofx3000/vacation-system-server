export interface RecordInter {
  id?: number;
  discount?: number;
  duration?: number;
  person_id?: number;
  phase?: PhaseInter[];
}

export interface PhaseInter {
  id?: number;
  destination: string;
  address: string;
  traffic?: string;
  tel?: string;
  emergency_tel?: string;
  start_at: Date;
  end_at: Date;
  record_id?: number;
  delete_tag?: boolean; // only use in update
}

export interface TemporizadorPersonalizado {
  id: string;
  nome: string; // VR-01: 1 a 40 chars
  tempoFocoMin: number; // VR-02: 1 a 120
  tempoPausaCurtaMin: number; // VR-03: 1 a 60
  ciclosAntesPausaLonga: number; // VR-04: 1 a 12
  tempoPausaLongaMin: number; // VR-05: 1 a 60
  criadoEm: number; // Timestamp
  atualizadoEm: number; // Timestamp
}

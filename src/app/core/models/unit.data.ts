export interface UnitData {
  id: string;
  data: {
    name: string;
    progress: Progress;
    meta: {
      paintingYear?: number;
    };
  };
}

export interface Progress {
  max: number;
  current: number;
}

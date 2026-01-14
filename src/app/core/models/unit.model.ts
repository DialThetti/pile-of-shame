export interface Unit {
  id: string;
  name: string;
  progress: Progress;
  meta: {
    paintingYear?: number;
  };
}

export interface Progress {
  max: number;
  current: number;
}

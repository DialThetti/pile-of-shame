export interface System {
  id: string;
  name: string;
  fractions: Fraction[];
}

export interface Fraction {
  name: string;
  units: Unit[];
}

export interface Unit {
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

import { Unit } from './unit.model';

export interface System {
  id: string;
  name: string;
  fractions: Fraction[];
}

export interface Fraction {
  id: string;
  name: string;
  units: Unit[];
}

/**
 * @deprecated
 */
export * from './unit.model';

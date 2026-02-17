import { UnitData } from './unit.data';
export interface SystemData {
  id: string;
  data: {
    name: string;
    fractions: FractionData[];
  };
}

export interface FractionData {
  id: string;
  data: {
    name: string;
    units: UnitData[];
  };
}

/**
 * @deprecated
 */
export * from './unit.model';

import { createActionGroup, props } from '@ngrx/store';
import { Fraction, System, Unit } from '../../models/system.model';

export const SystemActions = createActionGroup({
  source: 'System',
  events: {
    'save System': props<{ system: System }>(),
    'save Fraction': props<{ fraction: Fraction; systemId: string }>(),
    'save Units': props<{ systemId: string; fractionId: string; unit: Unit }>(),
  },
});

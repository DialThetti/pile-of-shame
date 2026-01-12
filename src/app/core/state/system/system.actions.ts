import { createActionGroup, props } from '@ngrx/store';
import { System, Unit } from '../../models/system.model';

export const SystemActions = createActionGroup({
  source: 'System',
  events: {
    'save System': props<{ system: System }>(),
    'save Fraction': props<{ name: string; systemId: string }>(),
    'save Units': props<{ systemId: string; fractionId: string; unit: Unit }>(),
  },
});

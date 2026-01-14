import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { System } from '../../models/system.model';
import { createReducer, on } from '@ngrx/store';
import { SystemActions } from './system.actions';

export const systemStateKey = 'system';
export type SystemState = EntityState<System>;

export const systemAdapter = createEntityAdapter<System>({
  selectId: system => system.id,
});

export const initialState: SystemState = systemAdapter.getInitialState({});

function upsertList<T extends { name: string }>(list: T[], o: T): T[] {
  const u = list.findIndex(l => l.name === o.name);
  if (u !== -1) {
    list[u] = o;
  } else {
    list.push(o);
  }
  return list;
}

export const systemReducer = createReducer(
  initialState,
  on(SystemActions.saveSystem, (state, { system }) =>
    systemAdapter.upsertOne(system, state)
  ),

  on(SystemActions.saveFraction, (state, { name, systemId }) => {
    const system = state.entities[systemId]!;
    return systemAdapter.upsertOne(
      {
        ...system,
        fractions: upsertList([...system.fractions], { name, units: [] }),
      },
      state
    );
  }),

  on(SystemActions.saveUnits, (state, { unit, fractionId, systemId }) => {
    const system = state.entities[systemId]!;
    let fraction = system.fractions.find(f => f.name === fractionId)!;
    fraction = { ...fraction, units: upsertList([...fraction.units], unit) };
    return systemAdapter.upsertOne(
      { ...system, fractions: upsertList([...system.fractions], fraction) },
      state
    );
  })
);

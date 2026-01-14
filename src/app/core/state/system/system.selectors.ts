import { createFeatureSelector, createSelector } from '@ngrx/store';
import { systemAdapter, SystemState, systemStateKey } from './system.reducer';

const selectSystemFeature = createFeatureSelector<SystemState>(systemStateKey);

const { selectEntities } = systemAdapter.getSelectors(selectSystemFeature);

const selectExistingEntities = createSelector(selectEntities, entities =>
  Object.values(entities)
    .filter(entity => entity !== undefined)
    .sort((a, b) => a.id.localeCompare(b.id))
);
const selectEntity = (id: string | undefined) =>
  createSelector(selectEntities, dict => (id ? dict[id] : undefined));

export const SystemSelectors = {
  selectEntities: selectExistingEntities,
  selectEntity,
};

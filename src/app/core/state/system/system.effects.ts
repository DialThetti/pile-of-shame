import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SystemActions } from './system.actions';
import { filter, map, switchMap } from 'rxjs';
import { SystemService } from '../../services/system.service';
import { Store } from '@ngrx/store';
import { SystemSelectors } from './system.selectors';

@Injectable()
export class SystemEffect {
  constructor(
    private actions$: Actions,
    private systemService: SystemService,
    private store: Store
  ) {}

  onSave$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SystemActions.saveSystem),
      switchMap(({ system }) => this.systemService.saveSystem(system)),
      map(() => SystemActions.saveSystemSuccess())
    );
  });

  onSaveFraction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SystemActions.saveFraction),
      switchMap(({ systemId }) =>
        this.store.select(SystemSelectors.selectEntity(systemId))
      ),
      filter(e => e !== undefined),
      switchMap(system => this.systemService.saveSystem(system)),
      map(() => SystemActions.saveSystemSuccess())
    );
  });

  onSaveUnits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SystemActions.saveUnits),
      switchMap(({ systemId }) =>
        this.store.select(SystemSelectors.selectEntity(systemId))
      ),
      filter(e => e !== undefined),
      switchMap(system => this.systemService.saveSystem(system)),
      map(() => SystemActions.saveSystemSuccess())
    );
  });

  loadSystems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SystemActions.loadSystems),
      switchMap(() => this.systemService.loadSystems()),
      map(systems => SystemActions.loadSystemsSuccess({ systems }))
    );
  });

  deleteSystem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SystemActions.deleteSystem),
      switchMap(({ id }) => this.systemService.deleteSystem(id)),
      map(() => SystemActions.loadSystems())
    );
  });
}

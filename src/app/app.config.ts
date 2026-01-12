import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { systemReducer, systemStateKey } from './core/state/system/system.reducer';
import {
  getInitialAppState,
  storeInLocalStorage,
} from './core/state/store-in-localstorage.reducer';

const initialState = getInitialAppState();
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideState({ name: systemStateKey, reducer: systemReducer }),
    provideStore([], {
      metaReducers: [storeInLocalStorage(systemStateKey)],
      initialState,
    }),
  ],
};

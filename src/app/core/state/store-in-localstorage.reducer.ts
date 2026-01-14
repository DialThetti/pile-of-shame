import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

type TypeId<T> = () => T;
type InitialState<T> = Partial<T> | TypeId<Partial<T>> | void;
// console.log all actions
export const storeInLocalStorage =
  (...features: string[]) =>
  // To be api compliant with meta reducer api, this any is required
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (reducer: ActionReducer<any>): ActionReducer<any> => {
    return function (state, action) {
      if (action.type === INIT || action.type === UPDATE) {
        const storageValue = localStorage.getItem('pos.system');
        if (storageValue) {
          try {
            return JSON.parse(storageValue);
          } catch {
            localStorage.removeItem('pos.system');
          }
        }
      }

      const newState = reducer(state, action);
      const toStore: Record<string, unknown> = {};
      features
        .filter(feature => newState[feature])
        .forEach(feature => {
          toStore[feature] = { ...newState[feature] };
        });
      if (Object.keys(toStore).length !== 0) {
        localStorage.setItem('pos.system', JSON.stringify(toStore));
      }
      return newState;
    };
  };

export function getInitialAppState(): InitialState<[]> | undefined {
  const previousSettings = localStorage.getItem('pos.system');
  if (previousSettings !== null && previousSettings !== undefined) {
    return JSON.parse(previousSettings);
  }
  return undefined;
}

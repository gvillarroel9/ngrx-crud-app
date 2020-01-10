import { InjectionToken } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";
import { Params } from "@angular/router";

import { environment } from "../../environments/environment";
import {
  State as EntityState,
  reducer as EntityReducer,
  ENTITY_FEATURE_KEY
} from "./reducer";
import { EntityEffects } from "./effects";

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

/**
 * Reset the state the store on logout
 */
function resetState(reducer) {
  return (state, action) => {
    // if (action.type === fromUser.logoutSuccess().type) {
    //   state = undefined;
    // }

    return reducer(state, action);
  };
}

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

// import * as fromLayout from './layout';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [ENTITY_FEATURE_KEY]: EntityState;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [ENTITY_FEATURE_KEY]: EntityReducer
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [resetState]
  : [resetState];

export const getMetaReducers = (): MetaReducer<AppState>[] => metaReducers;

/**
 * We need to inject reducers to our application to make AOT build worked
 */
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  "Registered Reducers",
  {
    factory: () => reducers
  }
);

export const appEffects = [EntityEffects];


import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { fromEntityActions } from "../actions/entity.actions";
import { Entity } from "../../models/entity";

export const ENTITY_FEATURE_KEY = "entity";

export interface State extends EntityState<Entity> {
  loaded: boolean;
  error?: Error | any;
}

export const adapter: EntityAdapter<Entity> = createEntityAdapter<Entity>({
  // In this case this would be optional since primary key is id
  selectId: item => item.id
});

export interface EntityPartialState {
  readonly [ENTITY_FEATURE_KEY]: State;
}

export const initialState: State = adapter.getInitialState({
  // Additional entity state properties
  loaded: false,
  error: null
});

const _reducer = createReducer(
  initialState,
  on(fromEntityActions.loadEntitiesSuccess, (state, { data }) => {
    return adapter.addAll(data, {
      ...state,
      loaded: true
    });
  }),
  on(fromEntityActions.loadEntitiesFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(fromEntityActions.loadEntitySuccess, (state, { entity}) => {
    return adapter.addOne(entity, state);
  }),
  on(fromEntityActions.loadEntityFail, (state, { error }) => {
    return {
      ...state,
      error
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}

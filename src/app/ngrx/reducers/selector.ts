import { createFeatureSelector, createSelector } from "@ngrx/store";

import { State, adapter, ENTITY_FEATURE_KEY } from "../reducers/entity.reducer";

// Lookup the 'Entity' feature state managed by NgRx
const getEntityState = createFeatureSelector<State>(ENTITY_FEATURE_KEY);

// get the selectors
const { selectIds, selectAll, selectTotal } = adapter.getSelectors();

// select the array of Entity ids
export const selectEntityIds = createSelector(
  getEntityState,
  selectIds
);

// select the array of Entitys
export const selectAllEntities = createSelector(
  getEntityState,
  selectAll
);

// select the total Entity count
export const selectEntityCount = createSelector(
  getEntityState,
  selectTotal
);

// select entity loaded flag
export const selectEntityLoaded = createSelector(
  getEntityState,
  state => state.loaded
);

// select entity error
export const selectError = createSelector(
  getEntityState,
  state => state.error
);
import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';
  import * as fromFruit from './fruit.reducer';
   
  export interface State {
    Fruits: fromFruit.State;
  }
   
  export const reducers: ActionReducerMap<State> = {
    Fruits: fromFruit.FruitReducer,
  };
   
  export const selectFruitState = createFeatureSelector<fromFruit.State>('Fruits');
   
  export const selectFruitIds = createSelector(
    selectFruitState,
    fromFruit.selectFruitIds // shorthand for FruitsState => fromFruit.selectFruitIds(FruitsState)
  );
  export const selectFruitEntities = createSelector(
    selectFruitState,
    fromFruit.selectFruitEntities
  );
  export const selectAllFruits = createSelector(
    selectFruitState,
    fromFruit.selectAllFruits
  );
  export const selectFruitTotal = createSelector(
    selectFruitState,
    fromFruit.selectFruitTotal
  );
  export const selectCurrentFruitId = createSelector(
    selectFruitState,
    fromFruit.getSelectedFruitId
  );
   
  export const selectCurrentFruit = createSelector(
    selectFruitEntities,
    selectCurrentFruitId,
    (FruitEntities, FruitId) => FruitEntities[FruitId]
  );
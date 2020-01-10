import { Fruit } from '../../models/fruit.model';
import {EntityState, createEntityAdapter} from '@ngrx/entity';
import * as actions from '../../ngrx/actions/fruit.actions';
import { createFeatureSelector } from '@ngrx/store';

// Entity adapter
export const fruitAdapter = createEntityAdapter<Fruit>();
export interface State extends EntityState<Fruit> {
    selectedFruitId: number | null;
 }
export const initialState: State = fruitAdapter.getInitialState(
    {
        selectedFruitId: null,
    }
);

//Reducer

export function FruitReducer(state: State = initialState, action: actions.FruitActions) {
    console.log(action);
    switch(action.type){

        case actions.GET_ALL_SUCCESS:
            return fruitAdapter.addOne(action.payload[0], state)
        
        case actions.CREATE_SUCCESS:
            return fruitAdapter.addOne(action.payload, state)

        case actions.GET_SUCCESS || actions.UPDATE_SUCCESS:
            return fruitAdapter.updateOne({
                id : action.payload.id,
                changes:action.payload
            }, state)

        case actions.DELETE_SUCCESS:
            return fruitAdapter.removeOne(action.payload, state)
     
        default :
            return state;
    
    }
}

export const getSelectedFruitId = (state: State) => state.selectedFruitId;

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = fruitAdapter.getSelectors();

  // select the array of Fruit ids
export const selectFruitIds = selectIds;
 
// select the dictionary of Fruit entities
export const selectFruitEntities = selectEntities;
 
// select the array of Fruits
export const selectAllFruits = selectAll;
 
// select the total Fruit count
export const selectFruitTotal = selectTotal;
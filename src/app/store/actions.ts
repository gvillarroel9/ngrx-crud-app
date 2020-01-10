import { createAction, props } from "@ngrx/store";

import { Entity } from "../models/entity";

export enum EntityActionTypes {
  LoadEntities = "[Entity] Load Entities",
  LoadEntitiesSuccess = "[Entity] Load Entities Success",
  LoadEntitiesFail = "[Entity] Load Entities Fail",
  LoadEntity = "[Entity] Load Entity",
  LoadEntitySuccess = "[Entity] Load Entity Success",
  LoadEntityFail = "[Entity] Load Entity Fail",
  UpdateEntity = "[Entity] Update Entity",
  UpdateEntitySuccess = "[Entity] Update Entity Success",
  UpdateEntityFail = "[Entity] Update Entity Fail"
}

export const loadEntities = createAction(EntityActionTypes.LoadEntities);

export const loadEntitiesSuccess = createAction(
  EntityActionTypes.LoadEntitiesSuccess,
  props<{ data: Entity[] }>()
);

export const loadEntitiesFail = createAction(
  EntityActionTypes.LoadEntitiesFail,
  props<{ error: Error | any }>()
);

export const loadEntity = createAction(
  EntityActionTypes.LoadEntity,
  props<{ id: string | number }>()
);

export const loadEntitySuccess = createAction(
  EntityActionTypes.LoadEntitySuccess,
  props<{ id: string | number; item: Entity }>()
);

export const loadEntityFail = createAction(
  EntityActionTypes.LoadEntityFail,
  props<{ error: Error | any }>()
);

export const updateEntity = createAction(
  EntityActionTypes.UpdateEntity,
  props<{ id: number | string; originalItem: any; updatedItem: any }>()
);

export const updateEntitySuccess = createAction(
  EntityActionTypes.UpdateEntitySuccess,
  props<{ id: number | string; originalItem: any; updatedItem: any }>()
);

export const updateEntityFail = createAction(
  EntityActionTypes.UpdateEntityFail,
  props<{
    id: number | string;
    originalItem: any;
    updatedItem: any;
    error: Error | any;
  }>()
);

export const fromEntityActions = {
  loadEntities,
  loadEntitiesFail,
  loadEntitiesSuccess,
  loadEntity,
  loadEntityFail,
  loadEntitySuccess
};

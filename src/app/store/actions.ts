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
  UpdateEntityFail = "[Entity] Update Entity Fail",
  CreateEntity = "[Entity] Create Entity",
  CreateEntitySuccess = "[Entity] Create Entity Success",
  CreateEntityFail = "[Entity] Create Entity Fail",
  DeleteEntity = "[Entity] Delete Entity",
  DeleteEntitySuccess = "[Entity] Delete Entity Success",
  DeleteEntityFail = "[Entity] Delete Entity Fail"
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
  props<{ id: number }>()
);

export const loadEntitySuccess = createAction(
  EntityActionTypes.LoadEntitySuccess,
  props<{ entity: Entity }>()
);

export const loadEntityFail = createAction(
  EntityActionTypes.LoadEntityFail,
  props<{ error: Error | any }>()
);

export const updateEntity = createAction(
  EntityActionTypes.UpdateEntity,
  props<{ update: Entity }>()
);

export const updateEntitySuccess = createAction(
  EntityActionTypes.UpdateEntitySuccess,
  props<{ entity: Entity }>()
);

export const updateEntityFail = createAction(
  EntityActionTypes.UpdateEntityFail,
  props<{ error: Error | any }>()
);

export const createEntity = createAction(
  EntityActionTypes.CreateEntity,
  props<{ new: Entity }>()
);

export const createEntitySuccess = createAction(
  EntityActionTypes.CreateEntitySuccess,
  props<{ entity: Entity }>()
);

export const createEntityFail = createAction(
  EntityActionTypes.CreateEntityFail,
  props<{ error: Error | any }>()
);

export const deleteEntity = createAction(
  EntityActionTypes.DeleteEntity,
  props<{ id: number }>()
);

export const deleteEntitySuccess = createAction(
  EntityActionTypes.DeleteEntitySuccess
);

export const deleteEntityFail = createAction(
  EntityActionTypes.DeleteEntityFail,
  props<{ error: Error | any }>()
);

export const fromEntityActions = {
  loadEntities,
  loadEntitiesFail,
  loadEntitiesSuccess,
  loadEntity,
  loadEntityFail,
  loadEntitySuccess,
  updateEntity,
  updateEntitySuccess,
  updateEntityFail,
  createEntity,
  createEntitySuccess,
  createEntityFail,
  deleteEntity,
  deleteEntitySuccess,
  deleteEntityFail
};

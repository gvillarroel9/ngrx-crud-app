import { createAction, props } from "@ngrx/store";

import { Entity } from "../../models/entity";

export enum EntityActionTypes {
  LoadEntities = "[Entity] Load Entities",
  LoadEntitiesSuccess = "[Entity] Load Entities Success",
  LoadEntitiesFail = "[Entity] Load Entities Fail",
  LoadEntity = "[Entity] Load Entities",
  LoadEntitySuccess = "[Entity] Load Entities Success",
  LoadEntityFail = "[Entity] Load Entities Fail"
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

export const loadEntity = createAction(EntityActionTypes.LoadEntity);

export const loadEntitySuccess = createAction(
  EntityActionTypes.LoadEntitySuccess,
  props<{ entity: Entity }>()
);

export const loadEntityFail = createAction(
  EntityActionTypes.LoadEntityFail,
  props<{ error: Error | any }>()
);



export const fromEntityActions = {
  loadEntities,
  loadEntitiesFail,
  loadEntitiesSuccess,
  loadEntity,
  loadEntityFail,
  loadEntitySuccess
};
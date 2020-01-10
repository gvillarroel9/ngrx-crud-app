import { Action } from '@ngrx/store';
import { Fruit } from '../../models/fruit.model';

/*
  ACTION CONSTANTS
*/


export const GET_ALL = '[Fruit] GET ALL';
export const GET_ALL_SUCCESS = '[Fruit] GET ALL SUCCESS';

export const GET = '[Fruit] GET';
export const GET_SUCCESS = '[Fruit] GET SUCCESS';

export const CREATE = '[Fruit] CREATE';
export const CREATE_SUCCESS = '[Fruit] CREATE SUCCESS';

export const UPDATE = '[Fruit] UPDATE';
export const UPDATE_SUCCESS = '[Fruit] UPDATE SUCCESS';

export const DELETE = '[Fruit] DELETE';
export const DELETE_SUCCESS = '[Fruit] DELETE SUCCESS';

export const FAILURE = '[Fruit] FAILURE';

/*
  ACTION CLASSES
*/

export class GetAll implements Action {
  readonly type = GET_ALL;
  
  constructor(public payload = null) {}
}
export class GetAllSuccess implements Action {
  readonly type = GET_ALL_SUCCESS;
  constructor(public payload: Fruit[]) {}
}

export class Get implements Action {
  readonly type = GET;
  constructor(public payload: number) {}
}

export class GetSuccess implements Action {
  readonly type = GET_SUCCESS;
  constructor(public payload: Fruit) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: Fruit) {}
}

export class UpdateSuccess implements Action {
    readonly type = UPDATE_SUCCESS;
    constructor(public payload: Partial<Fruit>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: number) {}
}

export class DeleteSuccess implements Action {
    readonly type = DELETE_SUCCESS;
    constructor(public payload: number) {}
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: Fruit) {}
}

export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public payload: Fruit) {}
}

export class Failure implements Action {
  readonly type = FAILURE;
  constructor (public payload: {concern: 'CREATE' | 'PATCH', error: any}) {}
}

export class Prueba implements Action {
  readonly type = "Prueba";
  constructor () {}
}

export type FruitActions =
| GetAll
| GetAllSuccess
| Get
| GetSuccess
| Create
| CreateSuccess
| Update
| UpdateSuccess
| Delete
| DeleteSuccess
| Failure

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import { fromEntityActions } from "./actions";
import { EntityService } from "../services/entity.service";
import { undo } from "ngrx-undo";




@Injectable()
export class EntityEffects {
  loadEntities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.loadEntities),
      switchMap(() =>
        this.entityService.getEntities().pipe(
          map((res: any) => {
            return fromEntityActions.loadEntitiesSuccess({
              data: res.data
            });
          }),
          catchError(error => {
            return of(
              fromEntityActions.loadEntitiesFail({
                error
              })
            );
          })
        )
      )
    )
  );

  loadEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.loadEntity),
      switchMap(({ id }) =>
        this.entityService.getEntity(id).pipe(
          map((res: any) => {
            return fromEntityActions.loadEntitySuccess({
              entity: res.data
            });
          }),
          catchError(error => {
            return of(
              fromEntityActions.loadEntityFail({
                error
              })
            );
          })
        )
      )
    )
  );

  updateEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.updateEntity),
      switchMap(action =>
        this.entityService.updateEntity(action.update.id, action.update).pipe(
          map((res: any) => {
            return fromEntityActions.updateEntitySuccess({
              entity: res.data
            });
          }),
          catchError(error => {
            return of(
              fromEntityActions.updateEntityFail({
                error
              }),
              undo(action)
            );
          })
        )
      )
    )
  );

  createEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.createEntity),
      switchMap(action =>
        this.entityService.createEntity(action.new).pipe(
          map((res: any) => {
            return fromEntityActions.createEntitySuccess({
              entity: res.data
            });
          }),
          catchError(error => {
            return of(
              fromEntityActions.createEntityFail({
                error
              }),
              undo(action)
            );
          })
        )
      )
    )
  );

  deleteEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.deleteEntity),
      switchMap(action =>
        this.entityService.deleteEntity(action.id).pipe(
          map(() => {
            return fromEntityActions.deleteEntitySuccess();
          }),
          catchError(error => {
            return of(
              fromEntityActions.deleteEntityFail({
                error
              }),
              undo(action)
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private entityService: EntityService
  ) {}
}

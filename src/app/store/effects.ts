import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import { fromEntityActions } from "./actions";
import { EntityService } from "../services/entity.service";

@Injectable()
export class EntityEffects {
  loadEntities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.loadEntities),
      switchMap(() =>
        this.entityService.getEntities().pipe(
          map((res: any) =>
            fromEntityActions.loadEntitiesSuccess({
              data: res.data
            })
          ),
          catchError(error =>
            of(
              fromEntityActions.loadEntitiesFail({
                error
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private entityService: EntityService
  ) {}
}

import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, take } from "rxjs/operators";

import { fromEntityActions } from "../store/actions";
import { EntityPartialState } from "../store/reducer";
import { selectEntity } from "../store/selectors";
import { Entity } from "../models/entity";

@Injectable()
export class EntityResolver implements Resolve<Entity> {
  constructor(private store: Store<EntityPartialState>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Entity> {
    const entity$ = this.store.pipe(
      select(selectEntity, { id: route.params.id })
    );

    return entity$.pipe(
      filter(entity => {
        if (!entity) {
          this.store.dispatch(
            fromEntityActions.loadEntity({ id: route.params.id })
          );
        }

        return !!entity;
      }),
      take(1)
    );
  }
}

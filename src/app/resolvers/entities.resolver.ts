import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, take } from "rxjs/operators";

import { fromEntityActions } from "../store/actions";
import { EntityPartialState } from "../store/reducer";
import { selectEntityLoaded } from "../store/selectors";

@Injectable()
export class EntitiesResolver implements Resolve<boolean> {
  constructor(private store: Store<EntityPartialState>) {}

  resolve(): Observable<boolean> {
    const loaded$ = this.store.pipe(select(selectEntityLoaded));

    return loaded$.pipe(
      filter(loaded => {
        if (loaded === false) {
          this.store.dispatch(fromEntityActions.loadEntities());
        }

        return loaded;
      }),
      take(1)
    );
  }
}

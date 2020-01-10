import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectAllEntities } from "./ngrx/reducers/selector";
import { fromEntityActions } from "./ngrx/actions/entity.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
    title = "Entities Page";
  
    entities$ = this.store.pipe(select(selectAllEntities));
  
    constructor(private store: Store<any>) {}
  
    ngOnInit(): void {
      this.store.dispatch(fromEntityActions.loadEntities());
    }
}

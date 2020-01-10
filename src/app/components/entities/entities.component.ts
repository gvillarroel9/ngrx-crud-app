import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectAllEntities } from "../../store/selectors";
import { fromEntityActions } from "../../store/actions";

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.sass']
})
export class EntitiesComponent implements OnInit {

  
  entities$ = this.store.pipe(select(selectAllEntities));
  
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(fromEntityActions.loadEntities());
  }

}

import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectAllEntities } from "../../store/selectors";
import { fromEntityActions } from "../../store/actions";
import { Router } from '@angular/router';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.sass']
})
export class EntitiesComponent implements OnInit {

  
  entities$ = this.store.pipe(select(selectAllEntities));

  constructor(private store: Store<any>,private _router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(fromEntityActions.loadEntities());
    console.log(this.entities$);
  }

  delete(id: number) {
    // Call delete action
    const result = confirm("Are you sure you want to delete this entity?");

    if (result) {
      // Logic to delete the item
      this.store.dispatch(fromEntityActions.deleteEntity({ id }));
    }
  }

  edit(id:number) {
    this._router.navigate(['edit', id]);
  }

}

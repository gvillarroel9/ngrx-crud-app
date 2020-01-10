import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './ngrx/actions/fruit.actions';
import * as fromFruit from './ngrx/reducers/fruit.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'ngrx-crud';
  fruits = this.store.pipe(select( fromFruit.selectAllFruits));

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}

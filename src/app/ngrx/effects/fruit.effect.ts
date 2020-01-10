import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Fruit } from '../../models/fruit.model';
import * as fruitActions from '../../ngrx/actions/fruit.actions';
import { switchMap, mergeMap, map, startWith } from 'rxjs/operators';
import { FruitService } from 'src/app/services/fruit.service';

@Injectable()
export class FruitEffects {

    constructor(private actions$: Actions, private fruitService: FruitService) {}

    @Effect()
    getAll$: Observable<Action> = this.actions$
    .pipe(
    ofType(fruitActions.GET_ALL),
    startWith(new fruitActions.GetAll()),
    map( (action) =>{
            /*this.fruitService.getFruits().subscribe(
                (response) => {
                    console.log(response['payload']);                 
                }                
            );*/
            let fruits = [];
            fruits[0]= {id: 1, name: "Limón 1.1", fruitPlantId: 1,
                        createdAt: "2019-09-28T19:52:15.000Z",
                        updatedAt: "2019-09-28T19:52:15.000Z",
                        plantId: 1};
            return new fruitActions.GetAllSuccess(fruits);
        }
    ));

    @Effect()
    create$: Observable<Action> = this.actions$
    .pipe(
    ofType(fruitActions.CREATE),
    startWith(new fruitActions.Create({id: 1, name: "Limón 1.1", fruitPlantId: 1, plantId: 1})),
    map( (action) =>{ 
        return new fruitActions.CreateSuccess({id: 1, name: "Limón 1.1", fruitPlantId: 1, plantId: 1})
        })
    );


}
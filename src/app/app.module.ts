import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FruitReducer } from './ngrx/reducers/fruit.reducer';
import { FruitEffects } from './ngrx/effects/fruit.effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot([FruitReducer]),
    StoreDevtoolsModule.instrument({
      maxAge: 50 // number of states to retain
    }),
    EffectsModule.forRoot([FruitEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

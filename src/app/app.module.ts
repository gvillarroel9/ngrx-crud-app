import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appEffects, REDUCER_TOKEN } from "./store";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './components/entities/entities.component';
import { EntityComponent } from './components/entity/entity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  entityResolvers
} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent,
    EntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([...appEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 50 // number of states to retain
    }),
  ],
  providers: [entityResolvers],
  bootstrap: [AppComponent]
})
export class AppModule { }

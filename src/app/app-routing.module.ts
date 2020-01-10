import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesComponent } from './components/entities/entities.component';
import { EntityComponent } from './components/entity/entity.component';
import { EntitiesResolver, EntityResolver } from "./resolvers";


export const entityResolvers = [EntitiesResolver, EntityResolver];

const routes: Routes = [
  {
    path: "",
    component: EntitiesComponent,
  },
  {
    path: "entities",
    component: EntitiesComponent,
    resolve: {
      entityLoaded: EntitiesResolver
    }
  },
  {
    path: "edit/:id",
    component: EntityComponent,
    resolve: {
      entity: EntityResolver
    }
  },
  {
    path: "add",
    component: EntityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

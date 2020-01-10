import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitiesComponent } from './components/entities/entities.component';
import { EntityComponent } from './components/entity/entity.component';


const routes: Routes = [
  {
    path: "",
    component: EntitiesComponent,
  },
  {
    path: "edit:/id",
    component: EntityComponent,
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

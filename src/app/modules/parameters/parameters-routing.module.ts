import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicationListComponent} from './publication/publication-list/publication-list.component';
import {PublicationCreationComponent} from './publication/publication-creation/publication-creation.component';
import {PublicationRemoveComponent} from './publication/publication-remove/publication-remove.component';
import {PublicationEditionComponent} from './publication/publication-edition/publication-edition.component';

const routes: Routes = [
  {
    path: 'publication-list',
    component: PublicationListComponent
  },
  {
    path: 'publication-creation',
    component: PublicationCreationComponent
  },
  {
    path: 'publication-edition',
    component: PublicationEditionComponent
  },
  {
    path: 'publication-remove',
    component: PublicationRemoveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }

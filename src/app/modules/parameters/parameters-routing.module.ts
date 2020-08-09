import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicationListComponent} from './publication/publication-list/publication-list.component';
import {PublicationCreationComponent} from './publication/publication-creation/publication-creation.component';
import {PublicationRemoveComponent} from './publication/publication-remove/publication-remove.component';
import {PublicationEditionComponent} from './publication/publication-edition/publication-edition.component';
import {RoomCreationComponent} from './room/room-creation/room-creation.component';
import {RoomListComponent} from './room/room-list/room-list.component';
import {RoomEditionComponent} from './room/room-edition/room-edition.component';
import {RoomRemoveComponent} from './room/room-remove/room-remove.component';

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
  },
  {
    path: 'room-list',
    component: RoomListComponent
  },
  {
    path: 'room-creation',
    component: RoomCreationComponent
  },
  {
    path: 'room-edition',
    component: RoomEditionComponent
  },
  {
    path: 'room-remove',
    component: RoomRemoveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }

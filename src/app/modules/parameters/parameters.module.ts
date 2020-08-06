import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { PublicationCreationComponent } from './publication/publication-creation/publication-creation.component';
import { PublicationEditionComponent } from './publication/publication-edition/publication-edition.component';
import { PublicationListComponent } from './publication/publication-list/publication-list.component';
import { PublicationRemoveComponent } from './publication/publication-remove/publication-remove.component';
import { RoomCreationComponent } from './room/room-creation/room-creation.component';
import { RoomEditionComponent } from './room/room-edition/room-edition.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomRemoveComponent } from './room/room-remove/room-remove.component';


@NgModule({
  declarations: [PublicationCreationComponent, PublicationEditionComponent, PublicationListComponent, PublicationRemoveComponent, RoomCreationComponent, RoomEditionComponent, RoomListComponent, RoomRemoveComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { PublicationCreationComponent } from './publication/publication-creation/publication-creation.component';
import { PublicationEditionComponent } from './publication/publication-edition/publication-edition.component';
import { PublicationListComponent } from './publication/publication-list/publication-list.component';
import { PublicationRemoveComponent } from './publication/publication-remove/publication-remove.component';
import { PublicationComponent } from './publication/publication/publication.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicationCreationComponent, PublicationEditionComponent, PublicationListComponent,PublicationRemoveComponent, PublicationComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[PublicationListComponent, PublicationListComponent]
})
export class ParametersModule { }

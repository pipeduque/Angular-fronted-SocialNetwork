import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportUserComponent } from './report-user/report-user.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [ReportUserComponent, ReportListComponent, ReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReportsModule { }

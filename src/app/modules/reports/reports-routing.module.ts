import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportUserComponent } from './report-user/report-user.component';
import { ReportListComponent } from './report-list/report-list.component';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';

const routes: Routes = [
  {
    path: 'report-publication/:id',
    component: ReportUserComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'report-list',
    component: ReportListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

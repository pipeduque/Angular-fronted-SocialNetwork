import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UnauthenticatedGuard } from 'src/app/guards/unauthenticated.guard';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    // canActivate: [UnauthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

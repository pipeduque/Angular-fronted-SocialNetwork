import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DefaultComponent
  },
  {
    path: 'home',
    component: DefaultComponent
  },
  // ESTA SIEMPRE DEBE SER LA ULTIMA RUTA
  {
    path: 'parameters',
    loadChildren: () => import('./modules/parameters/parameters-routing.module').then(m => m.ParametersRoutingModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

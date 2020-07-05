import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register/register.component';


const routes: Routes = [

//investigar
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PageModule)
  }, 
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"**", component:NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



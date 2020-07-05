import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';



const ROUTER_PAGE: Routes = [
    {path:"", component:PagesComponent,
        children:[
        {path:"dashboard", component:DashboardComponent},
        {path:"progress", component:ProgessComponent},
        {path:"graficas1", component:Graficas1Component},
        {path:"", redirectTo:"/dashboard", pathMatch:"full"}
        ]
  }
]


@NgModule({
    imports: [RouterModule.forChild(ROUTER_PAGE)],
    exports: [RouterModule]
  })
  export class PageRoutingModule { }
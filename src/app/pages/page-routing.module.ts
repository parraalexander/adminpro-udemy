import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const ROUTER_PAGE: Routes = [
    {path:"dashboard", component:PagesComponent,
        children:[
        {path:"", component:DashboardComponent, data:{titulo:"Dashboar"}},
        {path:"progress", component:ProgessComponent, data:{titulo:"Progess Bar"}},
        {path:"graficas1", component:Graficas1Component, data:{titulo:"Graficas"}},
        {path:"account-settings", component:AccountSettingsComponent, data:{titulo:"Ajuste de temas"}},
        {path:"promesas", component:PromesasComponent, data:{titulo:"Promesas"}},
        {path:"rxjs", component:RxjsComponent, data:{titulo:"RxJs"}}
        ]
  }
]


@NgModule({
    imports: [RouterModule.forChild(ROUTER_PAGE)],
    exports: [RouterModule]
  })
  export class PageRoutingModule { }


  // loadChildren: () => import('./pages/pages.module').then( mod => mod.PagesModule)
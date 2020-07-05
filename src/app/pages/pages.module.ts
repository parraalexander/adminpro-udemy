import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgessComponent } from './progess/progess.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../shared/share.module';
import { PageRoutingModule } from './page-routing.module';




@NgModule({
    declarations:[
        DashboardComponent,
        Graficas1Component,
        ProgessComponent,
        PagesComponent
    ],
    exports:[
        DashboardComponent,
        Graficas1Component,
        ProgessComponent,
        PagesComponent
    ],
    imports: [
        ShareModule,
        PageRoutingModule
      ]

})

export class PageModule { }
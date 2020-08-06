import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgessComponent } from './progess/progess.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../shared/share.module';
import { PageRoutingModule } from './page-routing.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';





@NgModule({
    declarations:[
        DashboardComponent,
        Graficas1Component,
        ProgessComponent,
        PagesComponent,
        IncrementadorComponent,
        AccountSettingsComponent
    ],
    exports:[
        DashboardComponent,
        Graficas1Component,
        ProgessComponent,
        PagesComponent,
        IncrementadorComponent
    ],
    imports: [
        ShareModule,
        PageRoutingModule,
        FormsModule
      ]

})

export class PageModule { }
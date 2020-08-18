import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgessComponent } from './progess/progess.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../shared/share.module';
import { PageRoutingModule } from './page-routing.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CommonModule } from '@angular/common';





@NgModule({
    declarations:[
        DashboardComponent,
        Graficas1Component,
        ProgessComponent,
        PagesComponent,
        IncrementadorComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        EditarPerfilComponent
    ],
    exports:[
        DashboardComponent,
        Graficas1Component,
        ProgessComponent,
        PagesComponent,
        IncrementadorComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
        PageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      ]

})

export class PageModule { }
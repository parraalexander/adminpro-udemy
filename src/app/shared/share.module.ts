import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations:[
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        NopagefoundComponent,
        GraficoDonaComponent
    ],
    exports: [
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        NopagefoundComponent,
        GraficoDonaComponent
    ],
    imports: [
        ChartsModule,
        RouterModule,
        CommonModule
    ]
})

export class ShareModule { }
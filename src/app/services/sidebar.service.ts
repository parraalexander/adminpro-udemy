import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo:'Dashboard D',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo:'Main', url:'/dashboard'
        },
        {
          titulo:'ProgressBar', url:'progress'
        },
        {
          titulo:'Graficas', url:'graficas1'
        }
      ]

    }
  ];

  constructor() { }
}

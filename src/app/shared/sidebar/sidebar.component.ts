import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menu: any[];
  constructor(private sidebarService: SidebarService) { 
   
  }

  ngOnInit(): void {
  this.menu = this.sidebarService.menu;
    this.menu.forEach((item) =>
    {
      let submenu = item.submenu.sort((a,b)=> {
        return a.titulo > b.titulo ? 1: -1;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menu: any[];
  public user : Usuario;
  constructor(private sidebarService: SidebarService, private userService : UsuarioService) { 
    this.user = this.userService.usuario;
   
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

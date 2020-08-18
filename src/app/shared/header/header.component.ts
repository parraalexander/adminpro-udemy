import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  public user : Usuario;

  constructor(private userService : UsuarioService) { 
    this.user = this.userService.usuario;
  }

  logout() {
    this.userService.logout();
  }
  ngOnInit(): void {
  }

}

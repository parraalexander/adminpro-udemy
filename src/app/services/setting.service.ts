import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  index: HTMLElement;
  constructor() { 
   this.index = document.getElementById("estilo");
  }


  agregarStyle(style : string) {
    let url = `assets/css/colors/${style}.css`;
    this.index.setAttribute("href", url);
    this.agregarClass(style);
    localStorage.setItem('Theme', url );
    localStorage.setItem('Selector', style);
  }
  agregarClass(style : string){
    let filas:any = document.getElementsByClassName("selector");
    for(let fila of filas){
        fila.classList.remove("working");
        let themAttb = fila.getAttribute('data-theme');
        if (themAttb == style){
          fila.classList.add("working");
        }
    }

  }
}

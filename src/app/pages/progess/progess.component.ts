import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styles: [
  ]
})
export class ProgessComponent implements OnInit {

  barraAzul:string;
  barraVerde:string;
  progress1:number = 10;
  progress2:number = 10;
  
  constructor() { }

  ngOnInit(): void {
    this.barraAzul = 'Barra Azuuuul';
    this.barraVerde = 'Barra Verdeeee';
  }

  actualizar(valor : number){

  }


}

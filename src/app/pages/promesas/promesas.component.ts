import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Resolver } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
/*     console.log("1");
    const promesa = new Promise((resolve)=>{
      console.log("ir al servicio");
      resolve("retornando un objeto asqueroso");
      console.log("regresar del servicio");
    });
    console.log("3");
    promesa.then((response)=>{
        console.log("concatenando " + response);
    });
    console.log("4"); */
    console.log("1");
    this.getUsuarios();
    console.log("2");

  }

  getUsuarios(){
    console.log("1.1");
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
      .then((response)=> response.json()
      .then((body)=>{
        console.log("*********");
        resolve(body.data)
      }))
    });
  }


}

import { Component, OnInit } from '@angular/core';

declare function initFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})

export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // href="assets/css/colors/default-dark.css" 

    let url = localStorage.getItem('Theme');
    if (url == null) url = 'assets/css/colors/default-dark.css';
    let selector = localStorage.getItem('Selector') || 'selector6';
    document.getElementById("estilo").setAttribute("href", url);

    initFunction();


  }




}

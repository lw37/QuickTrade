import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  elementos: string="vacio";
  ocultar:boolean=false;
  constructor() {}

  seleccion(elem){
    this.elementos=elem.target.value;
  }
}

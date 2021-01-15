import { Component, OnInit } from '@angular/core';
import { Iinmobiliaria, Imotor, Itecnologia } from '../interfaces';
import { motorService } from '../services/motor.service';
import { inmobiliariaService } from '../services/inmobiliaria.service'
import { tecnologiaService } from '../services/tecnologia.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  elementos: string = "vacio";
  ocultar: boolean = false;

  


  motores: Imotor[] = [];
  inmobiliarias: Iinmobiliaria[] = [];
  tecnologias: Itecnologia[] = [];

  constructor(private _motorService: motorService,
    private _inmobiliariaService: inmobiliariaService,
    private _tecnologiaService: tecnologiaService) {
    
     }

  ngOnInit() {
  this.motores=this._motorService.getMotores();
  this.inmobiliarias=this._inmobiliariaService.getInmobiliarias();
  this.tecnologias=this._tecnologiaService.getTecnologias();

  }

}

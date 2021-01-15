import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { motorService } from '../services/motor.service';
import { inmobiliariaService } from '../services/inmobiliaria.service'
import { tecnologiaService } from '../services/tecnologia.service';
import { Iproduct,Iinmobiliaria, Imotor, Itecnologia } from '../interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  id:number;
  categoria:string="";
  motor: Imotor;
  inmobiliaria: Iinmobiliaria;
  tecnologia: Itecnologia;



  constructor(private _activedRoute: ActivatedRoute, private _motorService: motorService,
    private _inmobiliariaService: inmobiliariaService,
    private _tecnologiaService: tecnologiaService) { }

  ngOnInit() {
    this.id = +this._activedRoute.snapshot.paramMap.get('id');
    this.inmobiliaria = this._inmobiliariaService.getInmobiliara(this.id);
    this.motor = this._motorService.getMotor(this.id);
    this.tecnologia = this._tecnologiaService.getTecnologia(this.id);
    
    if(this.motor!==null){
      this.categoria=this.motor.categoria;
    }else if(this.inmobiliaria!==null){
      this.categoria=this.inmobiliaria.categoria;
    }else{
      this.categoria=this.tecnologia.categoria;
    }
    console.log(this.categoria);
    console.log(this.motor,this.inmobiliaria)


  }

}

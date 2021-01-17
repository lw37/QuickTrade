import { Component, OnInit } from '@angular/core';
import { motorService } from '../services/motor.service';
import { inmobiliariaService } from '../services/inmobiliaria.service';
import { tecnologiaService } from '../services/tecnologia.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {


  constructor(private _motorService: motorService,
    private _inmobiliariasService: inmobiliariaService, 
    private _tecnologiaService: tecnologiaService) { 

    }

  ngOnInit() {
    let ref1=this._inmobiliariasService.getInmobiliarias();
    let ref2=this._motorService.getMotores();
    let ref3=this._tecnologiaService.getTecnologias();
    
    ref1.once("value",snapshot=>{
      snapshot.forEach(child=>{
        console.log(child.key)
      })
    })


  }

}



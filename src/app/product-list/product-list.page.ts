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
  
  id:string="";
  keys=[];
  tecnologias=[];
  motores=[];
  inmobiliarias=[];

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
        let inmobiliaria=child.val();
        inmobiliaria.key=child.key;
        this.inmobiliarias.push(inmobiliaria);
        console.log(inmobiliaria);

      })
    }
    );
    ref2.once("value",snapshot=>{
      snapshot.forEach(child=>{
        let motor=child.val();
        motor.key=child.key;
        this.motores.push(motor);
        console.log(child.key);
      })
    });
        
    ref3.once("value",snapshot=>{
      snapshot.forEach(child=>{
        let tecnologia=child.val();
        tecnologia.key=child.key;
        this.tecnologias.push(tecnologia);
        console.log(child.key);
      })
    });
  }

  click(){

  }

}



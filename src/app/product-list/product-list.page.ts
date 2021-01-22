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

  id: string = "";
  keys = [];
  tecnologias = [];
  motores = [];
  inmobiliarias = [];

  constructor(private _motorService: motorService,
    private _inmobiliariasService: inmobiliariaService,
    private _tecnologiaService: tecnologiaService) {

  }

  ngOnInit() {
    let ref = this._inmobiliariasService.getInmobiliarias();


    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        if (child.val().categoria == "motor") {
          let motor = child.val();
          motor.key = child.key;
          this.motores.push(motor);
          console.log(child.key);
          console.log(motor);
        } else if (child.val().categoria == "inmobiliaria") {
          let inmobiliaria = child.val();
          inmobiliaria.key = child.key;
          this.inmobiliarias.push(inmobiliaria);
          console.log(inmobiliaria);
        } else if (child.val().categoria == "tecnologia") {
          let tecnologia = child.val();
          tecnologia.key = child.key;
          this.tecnologias.push(tecnologia);
          console.log(child.key);
          console.log(tecnologia);
        }
      }
      )
    }
    )
  }

  click() {

  }

}



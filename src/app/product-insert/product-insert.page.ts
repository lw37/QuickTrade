import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { motorService } from '../services/motor.service';
import { inmobiliariaService } from '../services/inmobiliaria.service';
import { tecnologiaService } from '../services/tecnologia.service';


@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.page.html',
  styleUrls: ['./product-insert.page.scss'],
})
export class ProductInsertPage implements OnInit {

  ocultar: boolean = false;
  id:number=0;
  nombre:string="";
  descripcion:string="";
  categoria: string = "";
  estado: string = "";
  precio: number = 0;
  metrosCuadrado: number=0;
  numBanyo: number=0;
  numHabitacion: number=0;
  localidad: string="";
  tipo: string="";
  km: number=0;
  anyo: number=0;

  
  constructor(private _toastCtrl:ToastController,private _motorService:motorService ,
    private _inmobiliariasService:inmobiliariaService, private _tecnologiaService:tecnologiaService) { }
  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'Producto Añadido',
      duration: 2000,
      position:"bottom"
    });
    toast.present();
  }
  async presentToast1() {
    const toast = await this._toastCtrl.create({
      message: 'Debes elegir un categoria',
      duration: 2000,
      position:"bottom"
    });
    toast.present();
  }

  ngOnInit() {
  }

  seleccion(elem) {
    this.categoria = elem.target.value;
    console.log(this.categoria);
  }

  insertar() {
    if (this.categoria == "motor" ) {
        let motor={
          "id":this.id,
        "nombre":this.nombre,
        "descripcion":this.descripcion,
        "categoria": this.categoria,
        "tipo": this.tipo,
        "km": this.km,
        "anyo": this.anyo,
        "precio": this.precio
      }
      this._motorService.setMotor(motor);
      this.presentToast();
    } else if (this.categoria == "inmobiliaria") {
      let inmobiliaria={
        "id":this.id,
        "nombre":this.nombre,
        "descripcion":this.descripcion,
        "categoria": this.categoria,
        "metrosCuadrado": this.metrosCuadrado,
        "numBanyo": this.numBanyo,
        "numHabitacion": this.numHabitacion,
        "localidad": this.localidad,
        "precio": this.precio
      }
      this._inmobiliariasService.setInmobiliariar(inmobiliaria);
      this.presentToast();
    } else if(this.categoria=="tecnologia") {
     let tecnologia={
        "id":this.id,
        "nombre":this.nombre,
        "descripcion":this.descripcion,
        "categoria": this.categoria,
        "estado": this.estado,
        "precio": this.precio
      }
      this._tecnologiaService.setTecnologia(tecnologia);
      this.presentToast();
    }else{
      this.presentToast1();
    }

  }
 

}
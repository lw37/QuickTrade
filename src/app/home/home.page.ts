import { Component } from '@angular/core';
import { Iinmobiliaria, Imotor, Itecnologia } from '../interfaces';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  elementos: string = "vacio";
  ocultar: boolean = false;

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

  motor: Imotor[] = [];
  inmobiliaria: Iinmobiliaria[] = [];
  tecnologia: Itecnologia[] = [];

  constructor(private _toastCtrl:ToastController) { }
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


  seleccion(elem) {
    this.elementos = elem.target.value;
    console.log(this.categoria);
  }

  insertar() {
    if (this.elementos == "motor") {
      this.motor.push({
        "nombre":this.nombre,
        "descripcion":this.descripcion,
        "categoria": this.categoria,
        "tipo": this.tipo,
        "km": this.km,
        "anyo": this.anyo,
        "precio": this.precio
      });
      this.presentToast();
    } else if (this.elementos == "inmobiliaria") {
      this.inmobiliaria.push({
        "nombre":this.nombre,
        "descripcion":this.descripcion,
        "categoria": this.categoria,
        "metrosCuadrado": this.metrosCuadrado,
        "numBanyo": this.numBanyo,
        "numHabitacion": this.numHabitacion,
        "localidad": this.localidad,
        "precio": this.precio
      });
      this.presentToast();
    } else if(this.elementos=="tecnologia") {
      this.tecnologia.push({
        "nombre":this.nombre,
        "descripcion":this.descripcion,
        "categoria": this.categoria,
        "estado": this.estado,
        "precio": this.precio
      });
      this.presentToast();
    }else{
      this.presentToast1();
    }

  }

}

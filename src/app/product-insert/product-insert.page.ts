import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.page.html',
  styleUrls: ['./product-insert.page.scss'],
})
export class ProductInsertPage implements OnInit {


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

  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mis-ventas',
  templateUrl: './mis-ventas.page.html',
  styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {
  puntuacion:number=0;
  productos=[];
  constructor(private _db: AngularFireDatabase,private _toastCtrl:ToastController) { 
  }
  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'Porva for introduce un puntuacion entre:1-5',
      duration: 1000,
      position:"bottom"
    });
    toast.present();
  }

  ngOnInit() {
    let ref = this._db.database.ref('Mis_ventas');
    
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
          let product = child.val();
          this.productos.push(product);
          console.log(child.key);
          console.log(product);
  })})

}
  insertar(id){
    if(this.puntuacion>1 && this.puntuacion<5){
    let ref=this._db.database.ref('Mis_envios');
    console.log(id);
    this.productos.forEach(pro => {
      if(pro.id==id){
        pro.puntuacion=this.puntuacion;
        ref.push(pro);
      }
    });
  }else{
    this.presentToast();
  }
  }
}

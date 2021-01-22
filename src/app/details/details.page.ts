import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { motorService } from '../services/motor.service';
import { inmobiliariaService } from '../services/inmobiliaria.service';
import { tecnologiaService } from '../services/tecnologia.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  key:string=""
  producto = {};
  categoria:string="";
  constructor(private _activeRoute: ActivatedRoute, private _motorService: motorService,
    private _inmobiliariasService: inmobiliariaService,
    private _tecnologiaService: tecnologiaService, private _db: AngularFireDatabase) { }

  ngOnInit() {
    this.key = this._activeRoute.snapshot.paramMap.get("key");
    console.log(this.key)
    let ref = this._db.database.ref('Productos');
    console.log(ref);
    ref.once("value", snapshot => {
      let producto = snapshot.child(this.key);
      this.producto = producto.val();
      console.log(producto.val())
      this.categoria=producto.val().categoria;
      console.log(this.categoria)
    });
  }

}

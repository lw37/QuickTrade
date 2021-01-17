import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Imotor } from '../interfaces';

@Injectable()

export class motorService {

 /* motores: Imotor[] = [
    {
      "id": 3,
      "nombre": "Mercedes X2",
      "descripcion": "Seminuevo comprado en 2009",
      "categoria": "motor",
      "tipo": "Coche",
      "km": 20000,
      "anyo": 2009,
      "precio": 8000
    },
    {
      "id":4,
      "nombre": "Mercedes X3",
      "descripcion": "Seminuevo comprado en 2012",
      "categoria": "motor",
      "tipo": "Coche",
      "km": 20000,
      "anyo": 2012,
      "precio": 10000
    }
  ]

  getMotores(): Imotor[] {
    return this.motores;
  }

  getMotor(id:number): Imotor {
    for (const inm of this.motores) {
      if (inm.id==id){
        return inm;
      }
    }
   return null;
  }*/
  constructor(private _db:AngularFireDatabase){

  }

  setMotor(motor:Imotor){
    let ref=this._db.database.ref('Motores');
    ref.push(motor);
  }
}


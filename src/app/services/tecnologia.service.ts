import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Itecnologia } from '../interfaces';

@Injectable()

export class tecnologiaService {

  /*tecnologias: Itecnologia[] = [
    {
      "id": 5,
      "nombre": "portatil msi RTX3090",
      "descripcion": "1mes de uso",
      "categoria": "tecnologias",
      "estado": "usado",
      "precio": 20000
    },
    {
      "id": 6,
      "nombre": "portatil msi RTX3060",
      "descripcion": "Totalmente nuevo ",
      "categoria": "tecnologia",
      "estado": "nuevo",
      "precio": 15000
    }
  ]

  getTecnologias(): Itecnologia[] {
    return this.tecnologias;
  }
  getTecnologia(id: number): Itecnologia {
    for (const inm of this.tecnologias) {
      if (inm.id==id){
        return inm;
      }
    }
    return null;
  }*/
  constructor(private _db:AngularFireDatabase){

  }
  getTecnologias(): firebase.default.database.Reference {
    let ref=this._db.database.ref('Productos');
    return ref;
  }
  setTecnologia(tecnologia:Itecnologia){
    let ref=this._db.database.ref('Productos');
    ref.push(tecnologia);
  }
}


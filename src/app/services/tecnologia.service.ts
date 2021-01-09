import { Injectable } from '@angular/core';
import { Itecnologia } from '../interfaces';

@Injectable()

export class tecnologiaService {

  tecnologias: Itecnologia[] = [
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
  }
}


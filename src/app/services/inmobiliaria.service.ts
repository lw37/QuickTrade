import { Injectable } from '@angular/core';
import { Iinmobiliaria } from '../interfaces';

@Injectable()

export class inmobiliariaService {

  inmobiliarias: Iinmobiliaria[] = [
    {
      "id":1,
      "nombre": "Casa",
      "descripcion": "30año de construcción, muy buena",
      "categoria": "inmobiliaria",
      "metrosCuadrado": 400,
      "numBanyo": 4,
      "numHabitacion": 5,
      "localidad": "Calle Valencia 19 , Silla",
      "precio": 340000
    },
    {
      "id":2,
      "nombre": "Piso",
      "descripcion": "20año de construcción, muy buena",
      "categoria": "inmobiliaria",
      "metrosCuadrado": 170,
      "numBanyo": 2,
      "numHabitacion": 4,
      "localidad": "Calle Valencia 39 , Silla",
      "precio": 160000
    }
  ]

  getInmobiliarias(): Iinmobiliaria[] {
    return this.inmobiliarias;
  }
  getInmobiliara(ids: number): Iinmobiliaria {
    for (const inm of this.inmobiliarias) {
      if (inm.id==ids){
        return inm;
      }
      
    }
    return null;
  }

}


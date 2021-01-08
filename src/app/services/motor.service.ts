import { Injectable } from '@angular/core';
import { Imotor } from '../interfaces';

@Injectable()

export class motorService{

    motores:Imotor[]=[
        {
            "nombre": "Mercedes X2",
            "descripcion":"Seminuevo comprado en 2009",
            "categoria": "motor",
            "tipo": "Coche",
            "km": 20000,
            "anyo": 2009,
            "precio": 8000
          },
          {
            "nombre": "Mercedes X3",
            "descripcion":"Seminuevo comprado en 2012",
            "categoria": "motor",
            "tipo": "Coche",
            "km": 20000,
            "anyo": 2012,
            "precio": 10000
          }
    ]

    getMotor(): Imotor[]{
        return this.motores;
    }

}


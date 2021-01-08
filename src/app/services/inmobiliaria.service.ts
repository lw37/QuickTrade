import { Injectable } from '@angular/core';
import { Iinmobiliaria } from '../interfaces';

@Injectable()

export class motorService{

    inmobiliarias:Iinmobiliaria[]=[
        {
            "nombre":"Casa",
            "descripcion":"30año de construcción, muy buena",
            "categoria": "inmobiliaria",
            "metrosCuadrado": this.metrosCuadrado,
            "numBanyo": this.numBanyo,
            "numHabitacion": this.numHabitacion,
            "localidad": this.localidad,
            "precio": this.precio
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


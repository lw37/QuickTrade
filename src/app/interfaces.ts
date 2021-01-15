export interface Iproduct {
    "id": number,
    "nombre": string,
    "descripcion": string,
    "categoria": string
}

export interface Itecnologia extends Iproduct {
    "estado": string,
    "precio": number
}
export interface Iinmobiliaria extends Iproduct {
    "metrosCuadrado": number,
    "numBanyo": number,
    "numHabitacion": number,
    "localidad": string,
    "precio": number
}
export interface Imotor extends Iproduct {
    "tipo": string,
    "km": number,
    "anyo": number,
    "precio": number
}
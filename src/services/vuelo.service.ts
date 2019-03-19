import { Vuelo } from "../models/vuelo.model";

export class VueloService{
    private vuelos:  Vuelo []=
    [{
        "aerolínea":"British Airways",
        "aerolínea_foto":"#",
        "inicio":"Madrid",
        "destino":"Paris",
        "ida_inicio_hora":"16:30",
        "ida_destino_hora":"18:30",
        "ida_fecha": new Date​(​2019,​10​,​1​),
        "vuelta_inicio_hora": "16:30",
        "vuelta_destino_hora": "18:30",
        "vuelta_fecha": new Date(2019,10,2),
        "precio": 15
    }];
    constructor(){
    }
    getVuelos(){
        return this.vuelos;
        }
}

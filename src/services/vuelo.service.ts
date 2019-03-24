import { Vuelo } from "../models/vuelo.model";

export class VueloService{
    private vuelos: Vuelo[] =[
        {
            "aerolinea":"British Airways",
            "aerolinea_foto":"#",
            "inicio":"Madrid",
            "destino":"Paris",
            "ida_inicio_hora":"16:30",
            "ida_destino_hora":"18:30",
            "ida_fecha": new Date​(​2019,​10​,​1​),
            "vuelta_inicio_hora": "16:30",
            "vuelta_destino_hora": "18:30",
            "vuelta_fecha": new Date(2019,10,2),
            "precio": 150
        },
        {
            "aerolinea":"British Airways",
            "aerolinea_foto":"#",
            "inicio":"Madrid",
            "destino":"Paris",
            "ida_inicio_hora":"12:30",
            "ida_destino_hora":"14:30",
            "ida_fecha": new Date​(​2019,​10​,​1​),
            "vuelta_inicio_hora": "16:30",
            "vuelta_destino_hora": "18:30",
            "vuelta_fecha": new Date(2019,10,2),
            "precio": 199
        },
        {
            "aerolinea":"Ibería",
            "aerolinea_foto":"#",
            "inicio":"Madrid",
            "destino":"Paris",
            "ida_inicio_hora":"10:30",
            "ida_destino_hora":"12:30",
            "ida_fecha": new Date​(​2019,​10​,​1​),
            "vuelta_inicio_hora": "12:30",
            "vuelta_destino_hora": "15:30",
            "vuelta_fecha": new Date(2019,10,2),
            "precio": 300}
        ];

    constructor(){
    }

    getVuelos(){
        return this.vuelos;
    }

    addVuelo(value: Vuelo) {
        this
    }
}
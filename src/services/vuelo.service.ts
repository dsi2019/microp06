import { Vuelo } from "../models/vuelo.model";
import { Datos } from "../app/datos";

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
            "vuelta_inicio_hora": "11:30",
            "vuelta_destino_hora": "13:30",
            "vuelta_fecha": new Date(2019,10,2),
            "precio": 150
        },
        {
            "aerolinea":"Ryanair",
            "aerolinea_foto":"#",
            "inicio":"Madrid",
            "destino":"Paris",
            "ida_inicio_hora":"12:30",
            "ida_destino_hora":"14:30",
            "ida_fecha": new Date​(​2019,​10​,​1​),
            "vuelta_inicio_hora": "15:30",
            "vuelta_destino_hora": "17:30",
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

        private mis_vuelos: Vuelo[] =[];
        private mis_tarjetas: Vuelo[] = [];
        private tarjetas_datos: Datos[] = [];
        private currentVuelo: Vuelo;
        private currentIndex: any;
        private currentDatos: Datos;


    constructor(){
    }

    getVuelos(){
        return this.vuelos;
    }

    addtoMisVuelos(value: Vuelo, i) {
        this.mis_vuelos.push(value);
        this.vuelos.splice(i,1);
    }

    addtoMisTarjetas(value: Vuelo, datos, i) {
        this.mis_tarjetas.push(value);
        this.tarjetas_datos.push(datos);
        this.mis_vuelos.splice(i,1);
        this.setCurrentVuelo(null, null);
    }

    setCurrentVuelo(value: Vuelo, i) {
        this.currentVuelo = value;
        this.currentIndex = i;
    }

    setCurrentDatos(i) {
        this.currentDatos = this.tarjetas_datos[i];
    }

    getCurrentVuelo() {
        return this.currentVuelo;
    }

    getCurrentIndex() {
        return this.currentIndex;
    }

    getCurrentDatos() {
        return this.currentDatos;
    }

    getMisVuelos() {
        return this.mis_vuelos;
    }

    getMisTarjetas() {
        return this.mis_tarjetas;
    }

    getTarjetasDatos() {
        return this.tarjetas_datos;
    }
}
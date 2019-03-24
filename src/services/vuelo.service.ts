import { Vuelo } from "../models/vuelo.model";

export class VueloService{
    private vuelos:Array<Vuelo>=[
        new Vuelo("Ryanair", "", "Madrid", "Paris", "6:30", "9:00", new Date(2019,3,25), "11:00", "13:30", new Date(2019,3,27), 93),
        new Vuelo("British Airways", "", "Madrid", "Paris", "6:30", "9:00", new Date(2019,3,25), "14:00", "16:30", new Date(2019,3,27), 96),
        new Vuelo("British Airways", "", "Madrid", "Paris", "8:30", "11:00", new Date(2019,3,25), "11:00", "13:30", new Date(2019,3,27), 96),
        new Vuelo("Iberia", "", "Madrid", "Paris", "10:00", "12:30", new Date(2019,3,25), "14:00", "16:30", new Date(2019,3,27), 90),
    ];

    constructor(){
    }

    getVuelos(){
        return this.vuelos;
    }
}
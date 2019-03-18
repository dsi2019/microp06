export class Datos {
    private nombre:string;
    private pasaporte:number;
    private telefono:number;

    constructor(nombre:string, pasaporte:number,telefono:number) {
        this.nombre = nombre;
        this.pasaporte = pasaporte;
        this.telefono = telefono;
    }

    public getNombre():string {
        return this.nombre;
    }

    public getPasaporte():number {
        return this.pasaporte;
    }

    public getTelefono():number {
        return this.telefono;
    }
}
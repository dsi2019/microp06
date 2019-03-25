export class Datos {
    private nombre:string;
    private pasaporte:string;
    private telefono:number;

    constructor(nombre:string, pasaporte:string,telefono:number) {
        this.nombre = nombre;
        this.pasaporte = pasaporte;
        this.telefono = telefono;
    }

    public getNombre():string {
        return this.nombre;
    }

    public getPasaporte():string {
        return this.pasaporte;
    }

    public getTelefono():number {
        return this.telefono;
    }
}
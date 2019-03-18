export class Vuelo {

 public aerolínea:string;
 public aerolínea_foto:string;
 public inicio:string;
 public destino:string;
 public ida_inicio_hora:string;
 public ida_destino_hora:string;
 public ida_fecha:Date;

 public vuelta_inicio_hora:string;
 public vuelta_destino_hora:string;
 public vuelta_fecha:Date;
 
 public precio:number;

 constructor(
    aerolínea:string,
    aerolínea_foto:string,
    inicio: string,
    destino: string,
    ida_inicio_hora:string,
    ida_destino_hora:string,
    ida_fecha:Date,
    vuelta_inicio_hora:string,
    vuelta_destino_hora:string,
    vuelta_fecha:Date,
    precio:number,
 )
     {
        this.aerolínea = aerolínea,
        this.aerolínea_foto = aerolínea_foto,
        this.inicio = inicio,
        this.destino = destino,
        this.ida_inicio_hora = ida_inicio_hora,
        this.ida_destino_hora = ida_destino_hora,
        this.ida_fecha = ida_fecha,
        this.vuelta_inicio_hora = vuelta_inicio_hora,
        this.vuelta_destino_hora = vuelta_destino_hora,
        this.vuelta_fecha = vuelta_fecha,
        this.precio = precio
     }
}
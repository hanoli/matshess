import { Cliente } from "../model/cliente";




export class Folio {
  id: number;
  folio:string
  fecha: Date;
  tipoEquipo: String;
  marca: String;
  modelo: String;
  numSerie: String;
  cliente:Cliente;
  comentarios:String;
}
import { Cliente } from "./Cliente";


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
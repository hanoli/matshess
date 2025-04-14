import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { Product, Role } from '../model/product';
import { Folio } from '../interface/Folio';

import { Cliente2 } from 'src/app/interface/cliente2';




@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080/'
    })

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente2[]> {
    return this.http.get('api/lista').pipe(
      map(response => response as Cliente2[])
    );
  }

  creaCliente(cliente:Cliente2):Observable<Cliente2>{
    console.log('Se recibe cliente con apellido parterno ' + cliente.apellidoMat)
    console.log('Se recibe cliente con id ' + cliente.id)
    return this.http.post<Cliente2>('api/guardar',cliente,{headers:this.httpHeaders})
  }

  borraCliente(id:number):Observable<Cliente2>{
    return this.http.delete<Cliente2>('api/eliminar/'+id,{headers:this.httpHeaders})
  }

  getCliente(id:number): Observable<Cliente2> {
    return this.http.get<Cliente2>('api/idCliente/'+id,{headers:this.httpHeaders})
  }

  updateCliente(cliente:Cliente2):Observable<Cliente2>{
    return this.http.put<Cliente2>('api/actualizar/'+cliente.id,cliente,{headers:this.httpHeaders})

  }
  



}

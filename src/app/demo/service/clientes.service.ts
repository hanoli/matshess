import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Cliente } from '../components/pages/crud/cliente';


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

  getClientes(): Observable<Cliente[]> {
    /*return this.http.get(environment.urlHost+"auth/login").pipe(
      map(response => response as Cliente[])
    );*/

    return this.http.get(environment.urlHost+"api/lista").pipe(
      map(response => response as Cliente[])
    );

  }

  creaCliente(cliente:Cliente):Observable<Cliente>{
    console.log('object cliente: ' + cliente.nombre)
    console.log('apellido parterno: ' + cliente.apellidoPat)
    console.log('id: ' + cliente.id)
    return this.http.post<Cliente>(environment.urlHost+'api/guardar',cliente,{headers:this.httpHeaders})
  }

  borraCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>('api/eliminar/'+id,{headers:this.httpHeaders})
  }

  getCliente(id:number): Observable<Cliente> {
    return this.http.get<Cliente>('api/idCliente/'+id,{headers:this.httpHeaders})
  }

  updateCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>('api/actualizar/'+cliente.id,cliente,{headers:this.httpHeaders})

  }
  


}

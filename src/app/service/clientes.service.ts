import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Cliente } from '../model/cliente';
import { Product, Role } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {
 
  rol: Role = Role.ADMIN;
  
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

  creaCliente(cliente:Product):Observable<Cliente>{
    console.log('object cliente: ' + cliente.nombre)
    console.log('apellido parterno: ' + cliente.apellidoPat)
    console.log('id: ' + cliente.id)
    cliente.password = "123456"
    console.log('pasword: ' + cliente.password)
     
    cliente.rol = this.rol;
    //console.log('Rol: ' + cliente.rol)
    return this.http.post<Cliente>(environment.urlHost+'api/guardar',cliente,{headers:this.httpHeaders})
  }

  borraCliente(id:string):Observable<Cliente>{
    return this.http.delete<Cliente>('api/eliminar/'+id,{headers:this.httpHeaders})
  }

  getCliente(id:number): Observable<Cliente> {
    return this.http.get<Cliente>('api/idCliente/'+id,{headers:this.httpHeaders})
  }

  updateCliente(cliente:Cliente):Observable<Cliente>{
    console.log('Rol1: ' + this.rol)
    return this.http.put<Cliente>(environment.urlHost+'api/actualizar/'+cliente.id,cliente,{headers:this.httpHeaders})
  }

  
  


}

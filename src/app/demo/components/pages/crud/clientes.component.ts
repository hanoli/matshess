import { Component, OnInit } from '@angular/core';


import {Router} from "@angular/router"; 
import swal from 'sweetalert2';


import { ClientesService } from 'src/app/demo/service/clientes.service';
import { Cliente } from './cliente';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  //bsModalRef: BsModalRef;
 // constructor(private router: Router,private _clienteService:ClientesService,private bsModalService: BsModalService) { }
 constructor(private router: Router,private _clienteService:ClientesService) { }

  ngOnInit(): void {
  this._clienteService.getClientes().subscribe(
  clientes => this.clientes = clientes
  );
  }

  eliminar(cliente:Cliente):void{

console.log("item de cliente: " + cliente.id)

    swal.fire({
      title: 'Confirmacion',
      text: "¿Seguro que deseas eliminar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this._clienteService.borraCliente(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swal.fire(
              'Eliminado!',
              'Registro borrado con exito',
              'success'
            )
          }
        )

        
      }
    })

  }

/*addClient(){
  this.bsModalRef = this.bsModalService.show(IngresaclienteComponent,{class: "modal-lg"});
 
}*/
  
/*public creaCliente():void{

  this._clienteService.creaCliente(this).subscribe(
    response => 
    {
      swal.fire('Exito','Registro guardado con exito','success')
    //  this.item=false;
    // this.formCliente.reset();
   
      //);
    }
  )

}*/


}

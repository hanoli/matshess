import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import swal from 'sweetalert2';

import { ClientesService } from 'src/app/service/clientes.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { Cliente } from 'src/app/model/cliente';


@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService]
})
export class CrudComponent implements OnInit {

    btnGuardar:boolean;

    clientDialog: boolean = false;

    //updateClient: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: Product[] = [];

    product: Product = {};

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    clientes: Cliente[];
    
    //cliente:Cliente = new Cliente() 

    cliente: Cliente = {};

    rowsPerPageOptions = [5, 10, 20];

    constructor(private productService: ProductService, private messageService: MessageService,private _clienteService:ClientesService) { }

    ngOnInit() {
        this.btnGuardar = false;
        //this.productService.getProducts().then(data => this.products = data);
        this._clienteService.getClientes().subscribe(
            clientes => this.clientes = clientes
            );
            
        /*this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];*/

    }

    nuevoCliente() {
        this.btnGuardar = false;
        this.product = {};
        this.submitted = false;
        this.clientDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editClient(product: Product) {
        this.btnGuardar = true;
        this.product = { ...product };
        this.clientDialog = true;
       // this.updateClient = true;
    }

    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
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
      
          actualizaCliente():void{
             console.log('actualizaCliente con Id: ' + this.product.id)
            /*this.descripcionAlta = "Alta de cliente";
            this.btnGuardar = false;
            this.item=false;*/
            this._clienteService.updateCliente(this.product).subscribe(
                
              response => 
              {
               // this.hideDialog2()
                swal.fire('Exito','Registro actualizado con exito','success')
                this._clienteService.getClientes().subscribe(
                    clientes => this.clientes = clientes
                    );
               /* this._clienteService.getClientes().subscribe(
               clientes => {  
               this.dataSource = new MatTableDataSource();  
               this.dataSource.data = clientes;
               this.length = clientes.length;
               this.dataSource.paginator = this.paginator;
              });*/
            
              }
           
            )
            
           // this.formCliente.reset(); 
          
           }


           public creaCliente():void{

            this._clienteService.creaCliente(this.product).subscribe(
              response => 
              {
                this.hideDialog()
                swal.fire('Exito','Registro guardado con exito','success')
              //  this.item=false;
              // this.formCliente.reset();
             /* this.clienteService.getClientes().subscribe(
                //clientes => this.clientes = clientes
                clientes => {  
                  this.dataSource = new MatTableDataSource();  
                 this.dataSource.data = clientes;
                 this.length = clientes.length;
                 this.dataSource.paginator = this.paginator;
                 console.log(this.dataSource.data);
                 //this.dataSource.sort = this.sort;
                 console.log(this.dataSource.data);
                
                });*/
                //);
              }
            )
        
          }
        

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.products = this.products.filter(val => val.id !== this.product.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.product = {};
    }

    hideDialog() {
        this.clientDialog = false;
        this.submitted = false;
    }
 
    saveProduct() {
        this.submitted = true;

        if (this.product.nombre?.trim()) {
            if (this.product.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.id = this.createId();
               // this.product.code = this.createId();
               // this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.clientDialog = false;
            this.product = {};
        }
    }

   /* public creaCliente():void{

        this._clienteService.creaCliente(this.cliente).subscribe(
          response => 
          {
            alert('Registro guardado con exito')
          //  this.item=false;
          // this.formCliente.reset();
         
            //);
          }
        )
      
      }*/

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}

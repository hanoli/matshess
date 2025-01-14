
import { MessageService } from 'primeng/api';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {Folio} from '../../../interface/Folio';
import {Router} from "@angular/router"; 


//import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
//import { ClientesComponent } from '../../clientes/clientes/clientes.component';
//import { IngresaclienteComponent } from '../ingresaCliente/ingresacliente.component';
//import { IdClientesService } from 'src/app/servicios/id-clientes.service';
import { DatePipe } from '@angular/common';
import { TipoEquipo } from 'src/app/interface/TipoEquipo';

import { Marca } from 'src/app/interface/Marca';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import swal from 'sweetalert2';
import * as internal from 'events';
import { DomSanitizer } from '@angular/platform-browser';
import { FileModel } from 'src/app/interface/FileModel';
import {FormBuilder,FormGroup,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { PageEvent } from '@angular/material/paginator';
import { IngresaEquipoService } from 'src/app/service/ingresa-equipo.service';
import { FolioService } from 'src/app/service/folio.service';
import { ClientesService } from 'src/app/service/clientes.service';


import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { Cliente } from 'src/app/model/cliente';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  
  templateUrl: './recepcion-equipo.component.html',
  styleUrls: ['./recepcion-equipo.component.scss'],
  providers: [MessageService,DatePipe]
})
export class RecepcionEquipoComponent implements OnInit {

   clientes: Cliente[] = [];
      
      cliente: Cliente = {};
      cols: any[] = [];
      selectedProducts: Product[] = [];
      clientDialog: boolean = false;
      btnGuardar:boolean;
      submitted: boolean = false;

  form: FormGroup;
  tiposEquipos = ['Laptop', 'Desktop', 'Impresora', 'Monitor'];  // Ejemplo de opciones para Tipo de equipo
  marcas = ['HP', 'Dell', 'Lenovo', 'Acer'];  // Ejemplo de opciones para Marca

    private overlayContainer: OverlayContainer
    constructor(private fb: FormBuilder,) {
    this.form = this.fb.group({
      folio: [''],  // Este será el consecutivo, lo podemos dejar vacío al inicio
      fecha: [new Date(), Validators.required],
      numCliente: ['', Validators.required],
      nombre: ['', Validators.required],
      tipoEquipo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      numSerie: ['', Validators.required],
      comentarios: ['', Validators.maxLength(500)]
    });
  }

  // Esta función puede ser utilizada para obtener un folio consecutivo
  generarFolio() {
    const fecha = new Date();
    const folio = `F${fecha.getFullYear()}-${Math.floor(Math.random() * 10000)}`;
    this.form.patchValue({ folio });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  ngOnInit() {
    this.generarFolio();  // Genera el folio al iniciar el formulario
    
  }

  nuevoCliente() {
    this.btnGuardar = false;
    this.cliente = {};
    this.submitted = false;
    this.clientDialog = true;
}

hideDialog() {
  this.clientDialog = false;
  this.submitted = false;
}

}
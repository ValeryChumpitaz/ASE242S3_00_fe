import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Cliente {
  id: number;
  nombre: string;
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface DetalleVenta {
  producto: Producto;
  cantidad: number;
  subtotal: number;
}

interface Venta {
  cliente: Cliente;
  fecha: Date;
  detalles: DetalleVenta[];
  total: number;
}

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})

export class VentasComponent implements OnInit {
 
  formVenta!: FormGroup;
  clientes: Cliente[] = [];
  productos: Producto [] = [];
  ventas: Venta [] = [];
  total = 0;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.clientes = [
      {id: 1, nombre: 'Valery Chumpitaz'},
      {id: 2, nombre: 'Ana Torres'},
      {id: 3, nombre: 'Maria Lopez'},
      {id: 4, nombre: 'Piero Torres'},
    ];
    this.productos = [
      {id: 1, nombre: 'Laptop Lenovo', precio: 15 },
      {id: 2, nombre: 'Mause Lenovo', precio: 20 },
      {id: 3, nombre: 'Teclado Lenovo', precio: 35 },

    ];
    

  }
  
}
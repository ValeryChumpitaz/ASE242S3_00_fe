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

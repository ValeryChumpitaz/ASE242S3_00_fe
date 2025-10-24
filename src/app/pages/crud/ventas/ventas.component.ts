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
    imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  formVenta!: FormGroup;
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  ventas: Venta[] = [];
  total = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Mock de clientes y productos
    this.clientes = [
      { id: 1, nombre: 'Valery Chumpitaz' },
      { id: 2, nombre: 'Piero Torres' },
      { id: 3, nombre: 'María López' }
    ];

    this.productos = [
      { id: 1, nombre: 'Shampoo Capilar', precio: 15 },
      { id: 2, nombre: 'Tijeras Profesionales', precio: 25 },
      { id: 3, nombre: 'Tinte Natural', precio: 20 }
    ];

    this.formVenta = this.fb.group({
      cliente: [null, Validators.required],
      detalles: this.fb.array([])
    });

    this.agregarDetalle();
  }

  get detalles(): FormArray {
    return this.formVenta.get('detalles') as FormArray;
  }

  agregarDetalle(): void {
    const detalleForm = this.fb.group({
      producto: [null, Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      subtotal: [0]
    });
    this.detalles.push(detalleForm);
  }

  eliminarDetalle(index: number): void {
    this.detalles.removeAt(index);
    this.calcularTotal();
  }

  calcularSubtotal(index: number): void {
    const detalle = this.detalles.at(index);
    const producto = detalle.get('producto')?.value;
    const cantidad = Number(detalle.get('cantidad')?.value || 0);

    if (producto) {
      const subtotal = producto.precio * cantidad;
      detalle.get('subtotal')?.setValue(subtotal);
    }

    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.detalles.controls.reduce((acc, curr) => {
      return acc + (Number(curr.get('subtotal')?.value) || 0);
    }, 0);
  }

  guardar(): void {
    if (this.formVenta.invalid) return;

    const venta: Venta = {
      cliente: this.formVenta.value.cliente,
      fecha: new Date(),
      detalles: this.formVenta.value.detalles.map((d: any) => ({
        producto: d.producto,
        cantidad: d.cantidad,
        subtotal: d.subtotal
      })),
      total: this.total
    };

    this.ventas.push(venta);

    alert('✅ Venta registrada correctamente');

    this.formVenta.reset();
    this.detalles.clear();
    this.agregarDetalle();
    this.total = 0;
  }
}

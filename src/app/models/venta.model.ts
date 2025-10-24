export interface Cliente {
  id: string;
  nombre: string;
}

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

export interface Venta {
  cliente: Cliente;
  producto: Producto;
  cantidad: number;
  total: number;
  fecha: string;
}

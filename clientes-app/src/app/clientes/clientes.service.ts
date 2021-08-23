import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  getGrupos(): import("./cliente.model").Grupo[] {
    throw new Error('Method not implemented.');
  }
  getClientes(): Cliente[] {
    throw new Error('Method not implemented.');
  }
  agregarCliente(cliente: Cliente) {
    throw new Error('Method not implemented.');
  }
  nuevoCliente(): import("./cliente.model").Cliente {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

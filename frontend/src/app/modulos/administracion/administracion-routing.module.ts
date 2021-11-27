import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmuebles/eliminar-inmueble/eliminar-inmueble.component';
import { BuscarAdministradorComponent } from './personas/administradores/buscar-administrador/buscar-administrador.component';
import { CrearAdministradorComponent } from './personas/administradores/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './personas/administradores/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './personas/administradores/eliminar-administrador/eliminar-administrador.component';
import { BuscarAsesorComponent } from './personas/asesores/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './personas/asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './personas/asesores/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './personas/asesores/eliminar-asesor/eliminar-asesor.component';
import { BuscarClienteComponent } from './personas/clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './personas/clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './personas/clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './personas/clientes/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path: 'clientes/buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'clientes/crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'clientes/editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'clientes/eliminar-cliente',
    component: EliminarClienteComponent
  },

  {
    path: 'asesores/buscar-asesor',
    component: BuscarAsesorComponent
  },
  {
    path: 'asesores/crear-asesor',
    component: CrearAsesorComponent
  },
  {
    path: 'asesores/editar-asesor',
    component: EditarAsesorComponent
  },
  {
    path: 'asesores/eliminar-asesor',
    component: EliminarAsesorComponent
  },

  {
    path: 'administradores/buscar-administrador',
    component: BuscarAdministradorComponent
  },
  {
    path: 'administradores/crear-administrador',
    component: CrearAdministradorComponent
  },
  {
    path: 'administradores/editar-administrador',
    component: EditarAdministradorComponent
  },
  {
    path: 'administradores/eliminar-administrador',
    component: EliminarAdministradorComponent
  },

  {
    path: 'buscar-inmueble',
    component: BuscarInmuebleComponent
  },
  {
    path: 'crear-inmueble',
    component: CrearInmuebleComponent
  },
  {
    path: 'editar-inmueble',
    component: EditarInmuebleComponent
  },
  {
    path: 'eliminar-inmueble',
    component: EliminarInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

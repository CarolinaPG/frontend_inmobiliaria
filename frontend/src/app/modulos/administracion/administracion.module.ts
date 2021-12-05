import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearClienteComponent } from './personas/clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './personas/clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './personas/clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarClienteComponent } from './personas/clientes/buscar-cliente/buscar-cliente.component';
import { CrearAsesorComponent } from './personas/asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './personas/asesores/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './personas/asesores/eliminar-asesor/eliminar-asesor.component';
import { BuscarAsesorComponent } from './personas/asesores/buscar-asesor/buscar-asesor.component';
import { CrearAdministradorComponent } from './personas/administradores/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './personas/administradores/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './personas/administradores/eliminar-administrador/eliminar-administrador.component';
import { BuscarAdministradorComponent } from './personas/administradores/buscar-administrador/buscar-administrador.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmuebles/eliminar-inmueble/eliminar-inmueble.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
  
    CrearClienteComponent,
       EditarClienteComponent,
       EliminarClienteComponent,
       BuscarClienteComponent,
       CrearAsesorComponent,
       EditarAsesorComponent,
       EliminarAsesorComponent,
       BuscarAsesorComponent,
       CrearAdministradorComponent,
       EditarAdministradorComponent,
       EliminarAdministradorComponent,
       BuscarAdministradorComponent,
       CrearInmuebleComponent,
       EditarInmuebleComponent,
       EliminarInmuebleComponent,
       BuscarInmuebleComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //NgbModal,
  ]
})
export class AdministracionModule { }

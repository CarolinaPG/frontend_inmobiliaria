import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    ListarSolicitudesComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }

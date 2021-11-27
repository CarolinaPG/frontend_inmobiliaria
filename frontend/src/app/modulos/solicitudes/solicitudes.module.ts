import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';


@NgModule({
  declarations: [
    CrearSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }

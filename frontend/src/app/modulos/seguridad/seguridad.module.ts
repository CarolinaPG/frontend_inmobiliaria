import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    IdentificacionComponent,
    RecuperarClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [IdentificacionComponent]
})
export class SeguridadModule { }

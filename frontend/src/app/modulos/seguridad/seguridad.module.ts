import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component'
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './identificacion/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    IdentificacionComponent,
    RecuperarClaveComponent,
    CerrarSesionComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [IdentificacionComponent]
})
export class SeguridadModule { }

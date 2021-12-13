import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FiltroPipe } from './listar-solicitudes/filtro.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './listar-solicitudes/delete-dialog/delete-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    ListarSolicitudesComponent,
    FiltroPipe,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ]
})
export class SolicitudesModule { }

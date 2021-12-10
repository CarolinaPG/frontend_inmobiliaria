import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSolicitudesComponent implements OnInit {
  length: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent!: PageEvent;

  listadoRegistros: ModeloSolicitud[] = [];
  listadoRegistrosCliente: ModeloSolicitud[] = [];

  displayedColumns: string[] = ['posicion', 'codigo', 'lugar', 'direccion', 'valor', 'tipo', 'oferta', 'fotografia', 'fechas', 'estado', 'comentarios'];
  dataSource!: MatTableDataSource<ModeloSolicitud>;
  dataSourceC!: MatTableDataSource<ModeloSolicitud>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  subs: Subscription = new Subscription();

  constructor(
    private solicitudServicio: SolicitudService,

    private seguridadServicio: SeguridadService,
  ) { }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();
  }

  ObtenerListadoSolicitudes(){
    this.solicitudServicio.ObtenerRegistros().subscribe((datos: ModeloSolicitud[]) => {
      this.listadoRegistros = datos;
      let idC: string = "";
      this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion()
      .subscribe((datos: ModeloIdentificar) => {
        idC = datos.datos?.id!;
        this.listadoRegistros.forEach(element => {
          if(element.cliente == idC){
            this.listadoRegistrosCliente.push(element);
          }
        });
        this.dataSource = new MatTableDataSource(this.listadoRegistros);
        this.dataSourceC = new MatTableDataSource(this.listadoRegistrosCliente);
      });
    }, (error: any) => {
      alert("error listando las solicitudes");
    })
  }

  
}

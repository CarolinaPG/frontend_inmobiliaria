import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSolicitudesComponent implements OnInit {
  length: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent!: PageEvent;

  listadoRegistros: ModeloSolicitud[] = [];
  registroInterface: SolicitudInterface[] = [];

  //displayedColumns: string[] = ['posicion', 'codigo', 'tipoIn', 'tipoOf', 'fechaSol', 'direccion', 'valor', 'foto', 'estado'];
  displayedColumns: string[] = ['posicion', 'codigo', 'fechaSol', 'direccion', 'valor', 'foto', 'estado', 'opciones'];
  dataSource = new MatTableDataSource<SolicitudInterface>(this.registroInterface);
  //dataSource = new MatTableDataSource<ModeloInmueble>(this.listadoRegistros);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  subs: Subscription = new Subscription();

  constructor(
    private solicitudServicio: SolicitudService,

    // MatPaginator Output
    //public pageEvent: PageEvent,

    private seguridadServicio: SeguridadService,

    //private fb: FormBuilder,
    public dialog: MatDialog,

  ) { 
    //this.dataSource = new MatTableDataSource(this.registroInterface);
    this.ngAfterViewInit();
  }

  ngOnInit(): void {
    this.obtenerListadoSolicitudesCliente();
  }

  obtenerListadoSolicitudesCliente(){
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion()
      .subscribe((datos: ModeloIdentificar) => {
        let nombreC = datos.datos?.nombres + " " + datos.datos?.apellidos;
        let correoC = datos.datos?.correo;
        let idC = datos.datos?.id;

        this.solicitudServicio.ObtenerRegistrosCliente(idC!).subscribe((datos: ModeloSolicitud[]) => {
          this.listadoRegistros = datos;
          datos.forEach(element => {
            let fec = element.fechas!;
            let interfaceSol: SolicitudInterface = {
              id_solicitud: element.id!,
              posicion:     this.listadoRegistros.indexOf(element) +1,
              codigo:       element.predio?.codigo!,
              //tipoIn:       element.predio?.id_tipoIn,
              //tipoOf:       element.tipoO?.nombre!,
              direccion:    element.predio?.direccion!,
              fechaSol:     fec[0].fecha!,
              valor:        element.predio?.valor!,
              foto:         element.predio?.fotografia!,
              estado:       element.estado?.nombre!
            };
            this.registroInterface.push(interfaceSol);
          });
          this.dataSource = new MatTableDataSource<SolicitudInterface>(this.registroInterface);
          this.length = this.registroInterface.length;
        }, (error: any) => {
          alert("error listando las solicitudes");
        });
      });
  }

  eliminarSolicitud(solicitud: SolicitudInterface){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: "220px",
      width: '330px'
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.solicitudServicio.EliminarSolicitud(solicitud.id_solicitud)
        .subscribe((res: any) => {
          alert("La solicitud se eliminó exitosamente")
        }, (error: any) => {
          alert(error.error.error.message);
        })
      }
    })
  }

  refrescarSolicitudes(){

  }
  /**
  editarSolicitud(predio: ModeloSolicitud): void{
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion()
      .subscribe((datos: ModeloIdentificar) => {
        let nombreC = datos.datos?.nombres + " " + datos.datos?.apellidos;
        let correoC = datos.datos?.correo;
        let idC = datos.datos?.id;
        //let tipoIn = predio.tipoIn?.nombre;
        //let dirI = predio.direccion;
        //let ciudadI = predio.ciudad?.nombre;
        //let depaI = predio.departamento;
        //let valorI = predio.valor;
        //let fotoI = predio.fotografia;
        
        /**
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          height: '800px',
          width: '750px',
          data: {nombreC, correoC, idC, predio }
        });
        dialogRef.afterClosed().subscribe(res => {
          this.solicitudServicio.CrearSolicitud(idC!, predio.id!, res)
          .subscribe((datos: any) => {
            alert("Se registró la solicitud exitosamente");
            //this.router.navigate(['/inicio']);
          }, (error: any) => {
            //alert(JSON.stringify(error, null, 2));
            alert(error.error.error.message);
          });
        });
         */
  //    });
  //}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    /*
    alert(event.target);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      console.log("Tenemos paginator en datasource");
    }
    */
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue.toLowerCase();
  }

}


// Generated by https://quicktype.io
export interface SolicitudInterface {
  id_solicitud: string;
  posicion:     number;
  codigo:       string;
  //tipoIn:     string;
  //tipoOf:     string;
  fechaSol:     string;
  direccion:    string;
  valor:        number;
  foto:         string;
  estado:       string;
}

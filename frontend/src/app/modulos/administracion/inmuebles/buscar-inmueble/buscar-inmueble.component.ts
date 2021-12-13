import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {
  length: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent!: PageEvent;

  listadoRegistros: ModeloInmueble[] = [];
  listadoRegistrosLibres: ModeloInmueble[] = [];
  registroInterface: InmuebleInterface[] = [];

  displayedColumns: string[] = ['posicion', 'codigo', 'tipoIn', 'tipoOf', 'ciudad', 'departamento', 'direccion', 'valor', 'foto', 'estado'];
  dataSource = new MatTableDataSource<InmuebleInterface>(this.registroInterface);
  //dataSource = new MatTableDataSource<ModeloInmueble>(this.listadoRegistros);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  subs: Subscription = new Subscription();

  constructor(
    private inmuebleServicio: InmuebleService,

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
    this.obtenerListadoInmuebles();
  }
  
  obtenerListadoInmuebles(){
    this.inmuebleServicio.ObtenerRegistros().subscribe((datos: ModeloInmueble[]) => {
      this.listadoRegistros = datos;
      datos.forEach(element => {
        if(element.estado?.id == 6)
          this.listadoRegistrosLibres.push(element);
      });
      datos.forEach(element => {
        let interfaceIn: InmuebleInterface = {
          posicion:     this.listadoRegistros.indexOf(element) +1,
          codigo:       element.codigo!,
          tipoIn:       element.tipoIn?.nombre!,
          tipoOf:       element.tipoO?.nombre!,
          direccion:    element.direccion!,
          ciudad:       element.ciudad?.nombre!,
          depa:         element.departamento!,
          valor:        element.valor!,
          foto:         element.fotografia!,
          estado:       element.estado?.nombre!
        };
        this.registroInterface.push(interfaceIn);
      });
      this.dataSource = new MatTableDataSource<InmuebleInterface>(this.registroInterface);
      this.length = this.registroInterface.length;
    }, (error: any) => {
      alert("error listando los inmuebles");
    })
  }

  solicitarInmueble(predio: ModeloInmueble): void{
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
        
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //applyFilter(event: Event) {
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

//const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

// Generated by https://quicktype.io
export interface InmuebleInterface {
  posicion:     number;
  codigo:       string;
  tipoIn:       string;
  tipoOf:       string;
  direccion:    string;
  ciudad:       string;
  depa:         string;
  valor:        number;
  foto:         string;
  estado:       string;
}

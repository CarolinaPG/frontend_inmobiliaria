import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
//import { ModalDismissReasons, NgbModal } from 'ngx-bootstrap/';
// RECOMMENDED
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
//import { BsComponentRef } from 'ngx-bootstrap/component-loader';
// or
//import { ModalModule } from 'ngx-bootstrap';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {

  listadoRegistros: ModeloInmueble[] = [];
  listadoRegistrosLibres: ModeloInmueble[] = [];

  displayedColumns: string[] = ['posicion', 'codigo', 'lugar', 'direccion', 'valor', 'tipo', 'oferta', 'fotografia', 'estado'];
  dataSource: MatTableDataSource<ModeloInmueble>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    //private router: Router,
    private inmuebleServicio: InmuebleService,

    // MatPaginator Output
    //public pageEvent: PageEvent,
  ) { 
    this.dataSource = new MatTableDataSource(this.listadoRegistros);
    this.ngAfterViewInit();
  }

  ngOnInit(): void {
    this.ObtenerListadoInmuebles();
  }

  ObtenerListadoInmuebles(){
    this.inmuebleServicio.ObtenerRegistros().subscribe((datos: ModeloInmueble[]) => {
      this.listadoRegistros = datos;
      datos.forEach(element => {
        if(element.estado?.id == 6)
          this.listadoRegistrosLibres.push(element);
      });
      alert(this.listadoRegistros.length);
      this.dataSource = new MatTableDataSource(this.listadoRegistros);
    }, (error: any) => {
      alert("error listando los inmuebles");
    })
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
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /*
  openModal(template: TemplateRef<any>){
    this.bsModalRef = this.modalService.show(template);
  }
  */
}

const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];


import { Component, OnInit } from '@angular/core';
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
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {

  listadoRegistros: ModeloInmueble[] = [];

  listadoRegistrosLibres: ModeloInmueble[] = [];

  displayedColumns = ['posicion', 'codigo', 'lugar', 'direccion', 'valor', 'tipo', 'fotografia', 'estado'];
  dataSource: ModeloInmueble[] = [];
  dataSourceLibre: ModeloInmueble[] = [];

  constructor(
    //private router: Router,
    private inmuebleServicio: InmuebleService,
    //private modalService: BsModalService,
  ) { }

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
      this.dataSource = this.listadoRegistros;
      this.dataSourceLibre = this.listadoRegistrosLibres;
      //alert(JSON.stringify(this.dataSource));
    }, (error: any) => {
      alert("error listando los inmuebles");
    })
  }

  
  applyFilter(filterValue: string){
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /*
  openModal(template: TemplateRef<any>){
    this.bsModalRef = this.modalService.show(template);
  }
  */
 
}

const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

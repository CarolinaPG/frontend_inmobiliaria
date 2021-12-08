import { Component, OnInit, ViewChild } from '@angular/core';
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
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


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

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {
  //displayedColumns: string[] = ['position', 'codigo', 'lugar', 'direccion', 'valor', 'tipo', 'estado', 'foto', 'video'];
  //displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  
  //dataSource = new MatTableDataSource<ModeloInmueble>(this.listadoRegistros);
  //dataSource: MatTableDataSource<UserData>;

  //@ViewChild(MatPaginator)
  //paginator!: MatPaginator;
  
  //@ViewChild(MatSort)
  //sort!: MatSort;
  
  listadoRegistros: ModeloInmueble[] = [];

  listadoRegistrosLibres: ModeloInmueble[] = [];

  constructor(
    //private router: Router,

    private inmuebleServicio: InmuebleService,

    //private modalService: NgbModal,
    //private modalService: BsModalService,
  ) { 

    //const users = Array.from({length: 100}, (_, k) => createNewUser(k+1));

    //this.dataSource = new MatTableDataSource(users);

  }

  ngOnInit(): void {
    this.ObtenerListadoInmuebles();
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  ObtenerListadoInmuebles(){
    this.inmuebleServicio.ObtenerRegistros().subscribe((datos: ModeloInmueble[]) => {
      this.listadoRegistros = datos;
      datos.forEach(element => {
        if(element.estado?.id == 6)
          this.listadoRegistrosLibres.push(element);
      });
    }, (error: any) => {
      alert("error listando los inmuebles");
    })
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


/*
  applyFitler(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
*/
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

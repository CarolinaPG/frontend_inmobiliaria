import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
//import { ConsoleReporter } from 'jasmine';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
//import { NgbModal } from '@';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {

  listadoRegistros: ModeloInmueble[] = [];
  constructor(
    //private router: Router,

    private inmuebleServicio: InmuebleService,

  ) { }

  ngOnInit(): void {
    this.ObtenerListadoInmuebles();
  }

  ObtenerListadoInmuebles(){
    this.inmuebleServicio.ObtenerRegistros().subscribe((datos: ModeloInmueble[]) => {
      this.listadoRegistros = datos;
    }, (error: any) => {
      alert("error listando los inmuebles");
    })
  }

 
}

import { Component, OnInit, TemplateRef } from '@angular/core';
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


@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {

  listadoRegistros: ModeloInmueble[] = [];

  listadoRegistrosLibres: ModeloInmueble[] = [];

  bsModalRef!: BsModalRef;

  constructor(
    //private router: Router,

    private inmuebleServicio: InmuebleService,

    //private modalService: NgbModal,
    private modalService: BsModalService,
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
    }, (error: any) => {
      alert("error listando los inmuebles");
    })
  }

  openModal(template: TemplateRef<any>){
    this.bsModalRef = this.modalService.show(template);
  }
 
}

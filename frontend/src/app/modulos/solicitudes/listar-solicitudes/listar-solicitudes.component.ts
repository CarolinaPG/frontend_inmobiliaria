import { Component, OnInit } from '@angular/core';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSolicitudesComponent implements OnInit {

  listadoRegistros: ModeloSolicitud[] = [];
  constructor(
    //private router: Router,

    private solicitudServicio: SolicitudService,

  ) { }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();
  }

  ObtenerListadoSolicitudes(){
    this.solicitudServicio.ObtenerRegistros().subscribe((datos: ModeloSolicitud[]) => {
      this.listadoRegistros = datos;
    }, (error: any) => {
      alert("error listando los inmuebles");
    })
  }

}

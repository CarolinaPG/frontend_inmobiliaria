import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean = false;
  //isChecked = true;

  subs: Subscription = new Subscription();

  elNombre: string = "";
  /**
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  */

  constructor(
    private seguridadServicio: SeguridadService,

    //private breakpointObserver: BreakpointObserver,
  ){ }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion()
      .subscribe((datos: ModeloIdentificar) => {
        this.seInicioSesion = datos.estaIdentificado;
        //alert(JSON.stringify(datos, null, 2));
        this.elNombre = datos?.datos?.nombres + " " + datos?.datos?.apellidos;
      });
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSolicitud } from '../modelos/solicitud.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url = 'http://localhost:3000';

  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadServicio: SeguridadService,
  ) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloSolicitud[]>{
    //let datos = this.http.get<ModeloSolicitud[]>(`${this.url}/solicitudes?filter[include][0][relation]=fechas&filter[include][1][relation]=documentos`);
    let datos = this.http.get<ModeloSolicitud[]>(`${this.url}/solicitudes`);
    return datos;
  }

  CrearSolicitud(idCliente: string, idInmueble: string, fechas: string[]): Observable<ModeloSolicitud>{
    let sol = {
      id_cliente: idCliente,
      id_inmueble: idInmueble,
      fechas: fechas
    };
    alert(JSON.stringify(sol));
    let res = this.http.post<ModeloSolicitud>(`${this.url}/solicitudes`, sol, {
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}`
      })
    });
    alert(JSON.stringify(res));
    return res;
  }

  ActualizarSolicitud(solicitud: ModeloSolicitud): Observable<ModeloSolicitud>{
    return this.http.patch<ModeloSolicitud>(`${this.url}/solicitudes`, solicitud, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarSolicitud(id: string): Observable<any>{
    return this.http.delete(`${this.url}/solicitudes/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}

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

  //ObtenerRegistros(): Observable<ModeloSolicitud[]>{
    //let datos = this.http.get<ModeloSolicitud[]>(`${this.url}/solicitudes?filter[include][0][relation]=fechas&filter[include][1][relation]=documentos`);
  //  let datos = this.http.get<ModeloSolicitud[]>(`${this.url}/solicitudes`);
  //  return datos;
  //}

  ObtenerRegistrosCliente(idCliente: string) {
    //let res = this.http.get<ModeloSolicitud[]>(`${this.url}/solicitudes/cliente/${idCliente}`, {
    let res = this.http.get<ModeloSolicitud[]>(`${this.url}/solicitudes?filter[include][0][relation]=fechas&filter[include][1][relation]=documentos&filter[include][2][relation]=estado&filter[include][3][relation]=cliente&filter[include][4][relation]=predio&filter[where][id_cliente]=${idCliente}`, {
        headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}`
      })
    });
    return res;
  }

  CrearSolicitud(idCliente: string, idInmueble: string, fechas: string[]): Observable<ModeloSolicitud>{
    let sol = {
      id_cliente: idCliente,
      id_inmueble: idInmueble,
      fechas: fechas
    };
    let res = this.http.post<ModeloSolicitud>(`${this.url}/solicitudes`, sol, {
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}`
      })
    });
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
    alert(id);
    return this.http.delete(`${this.url}/solicitudes/${id}`, {
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}`
      })
    });
  }

}

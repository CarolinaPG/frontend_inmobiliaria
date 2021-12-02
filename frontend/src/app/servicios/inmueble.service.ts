import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloDepartamento } from '../modelos/departamento.modelo';
import { ModeloInmueble } from '../modelos/inmueble.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  url = 'http://localhost:3000';


  token: string = '';

  constructor(
    private http: HttpClient,
    private seguridadServicio: SeguridadService

  ) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerDepartamento(id: number): Observable<ModeloDepartamento>{
    let datos = this.http.get<ModeloDepartamento>(`${this.url}/departamentos/${id}`);
    return datos;
  }

  ObtenerRegistros(): Observable<ModeloInmueble[]>{
    //filt=['asesor', 'ciudad', 'tipoIn', 'tipoO', 'estado']
    //http://localhost:3000/inmuebles?filter[include][0]=asesor&filter[include][1]=ciudad&filter[include][2]=tipoO&filter[include][3]=tipoIn&filter[include][4]=estado
    let datos = this.http.get<ModeloInmueble[]>(`${this.url}/inmuebles?filter[include][0]=asesor&filter[include][1]=ciudad&filter[include][2]=tipoO&filter[include][3]=tipoIn&filter[include][4]=estado`);
    return datos;
  }

  ObtenerRegistroPorId(id: string): Observable<ModeloInmueble>{
    let datos = this.http.get<ModeloInmueble>(`${this.url}/inmuebles/${id}`);
    return datos;
  }

  CrearInmueble(inmueble: ModeloInmueble): Observable<ModeloInmueble>{
    return this.http.post<ModeloInmueble>(`${this.url}/inmuebles`, inmueble, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarInmueble(inmueble: ModeloInmueble): Observable<ModeloInmueble>{
    return this.http.patch<ModeloInmueble>(`${this.url}/inmuebles`, inmueble, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarInmueble(id: string): Observable<any>{
    return this.http.delete(`${this.url}/inmuebles/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}

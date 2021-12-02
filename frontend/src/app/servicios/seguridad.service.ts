import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { ModeloRecuperar } from '../modelos/recuperar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';

  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(
    private http: HttpClient
  ) { 
    this.VerificarSesionActual();
  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  IdentificarPersona(usuario: string, clave: string): Observable<ModeloIdentificar>{
    let res = this.http.post<ModeloIdentificar>(`${this.url}/identificarPersona`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({

      })
    });
    console.log(res);
    return res;
  }

  AlmacenarSesion(datos: ModeloIdentificar){
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  RecuperarClave(usuario: string): Observable<ModeloRecuperar>{
    let res = this.http.patch<ModeloRecuperar>(`${this.url}/recuperarClave`, {
      usuario: usuario,
      clave: ""
    }, {
      headers: new HttpHeaders({ })
    });
    console.log(res);
    return res;
  }

  ObtenerToken(){
    let datosString= localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    } else {
      return '';
    }
  }
}

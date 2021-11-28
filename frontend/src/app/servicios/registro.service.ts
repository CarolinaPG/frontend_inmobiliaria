import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloRegistrar } from '../modelos/registrar.modelo';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  RegistrarCliente(id: string, tipoId: string, nombres: string, apellidos: string, celular: string, email: string, rol: number): Observable<ModeloRegistrar>{
    let res = this.http.post<ModeloRegistrar>(`${this.url}/clientes`, {
      id: id,
      tipoId: tipoId,
      nombres: nombres,
      apellidos: apellidos,
      celular: celular,
      email: email,
      rol: rol
    }, {
      headers: new HttpHeaders({ })
    });
    return res;
  }

}

import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path: "identificar",
    component: IdentificacionComponent,
    pathMatch: "full"
  },
  {
    path: "recuperarClave",
    component: RecuperarClaveComponent,
    pathMatch: "full"
  },
  {
    path: "cerrarSesion",
    component: CerrarSesionComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
  ],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }

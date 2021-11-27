import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }

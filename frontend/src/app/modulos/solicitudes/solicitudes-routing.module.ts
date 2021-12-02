import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';

const routes: Routes = [
  {
    path: "listar-solicitudes",
    component: ListarSolicitudesComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { 
  
}

import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudInterface } from './listar-solicitudes.component';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(listado: MatTableDataSource<SolicitudInterface>, ...args: unknown[]): MatTableDataSource<SolicitudInterface> {
    alert(listado.paginator?.page);
    return listado;
  }

}

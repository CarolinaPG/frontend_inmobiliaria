import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ModeloInmueble } from 'src/app/modelos/inmueble.modelo';
import { InmuebleInterface } from './buscar-inmueble.component';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(listado: MatTableDataSource<InmuebleInterface>, ...args: unknown[]): MatTableDataSource<InmuebleInterface> {
    alert(listado.paginator?.page);
    return listado;
  }

}

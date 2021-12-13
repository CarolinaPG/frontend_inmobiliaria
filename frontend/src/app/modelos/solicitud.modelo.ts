import { ModeloCliente } from "./cliente.modelo";
import { ModeloEstado } from "./estado.modelo";
import { ModeloFecha } from "./fecha.modelo";
import { ModeloInmueble } from "./inmueble.modelo";

export class ModeloSolicitud{
    id?:          string;
    comentarios?: string;
    id_estado?:   number;
    id_cliente?:  string;
    id_inmueble?: string;
    fechas?:      ModeloFecha[];
    estado?:      ModeloEstado;
    cliente?:     ModeloCliente;
    predio?:      ModeloInmueble;
}


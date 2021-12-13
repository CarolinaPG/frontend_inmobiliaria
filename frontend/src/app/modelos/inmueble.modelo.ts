import { ModeloCiudad } from "./ciudad.modelo";
import { ModeloDepartamento } from "./departamento.modelo";
import { ModeloEstado } from "./estado.modelo";
import { ModeloPersona } from "./persona.modelo";
import { ModeloTipoInmueble } from "./tipoInmueble.modelo";
import { ModeloTipoOferta } from "./tipoOferta.modelo";

export class ModeloInmueble{
    id?: string;
    codigo?: string;
    direccion?: string;
    valor?: number;
    fotografia?: string;
    videoYoutube?: string;
    asesor?: ModeloPersona;
    ciudad?: ModeloCiudad;
    departamento?: string;
    estado?: ModeloEstado;
    tipoIn?: ModeloTipoInmueble;
    tipoO?: ModeloTipoOferta;
    id_asesor?: string;
    id_ciudad?: number;
    id_departamento?: number;
    id_estado?: number;
    id_tipoIn?: number;
    id_tipoO?: number;
}

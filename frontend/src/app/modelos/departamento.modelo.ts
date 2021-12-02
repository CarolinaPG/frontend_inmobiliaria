import { ModeloCiudad } from "./ciudad.modelo";

export class ModeloDepartamento{
    id?: string;
    nombre?: string;
    ciudades?: ModeloCiudad[];
}
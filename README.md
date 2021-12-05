# frontend_inmobiliaria
Repositorio donde se almacenará el desarrollo del frontend para el proyecto de cilco 4 sobre la inmobiliaria "Hogar Colombia"

Para clonar el repositorio se utilizará el comando:
> git clone https://github.com/CarolinaPG/frontend_inmobiliaria.git


### Paquetes isntalados
Comandos de los paquetes que se requisiró instalar
> npm install bootstrap

> npm install -g @angular/cli

> npm install materialize-css@next

> npm install crypto-js

> npm install --save @types/crypto-js

> npm install --save @ng-bootstrap/ng-bootstrap@"*" --legacy-peer-deps

> ng add @angular/material



### Comandos para crear el frontend

Comandos para crear un frontend con angular:

> ng new

> ng serve --open

Se crean los módulos según requiera la aplicación, por ejemplo:

> ng generate module modulos/seguridad --routing

> ng generate module modulos/adminsitracion --routing

> ng generate module modulos/solicitudes --routing

Ahora se requeire crear los componentes:

> ng generate component modulos/seguridad/identificacion

> ng generate component modulos/seguridad/recuperarClave

Dentro de los clientes se tiene un CRUD, y así mismo para Asesores,Adminsitradores e Inmuebles

> ng generate component modulos/administracion/personas/clientes/crear-cliente

> ng generate component modulos/administracion/personas/clientes/editar-cliente

> ng generate component modulos/administracion/personas/clientes/eliminar-cliente

> ng generate component modulos/administracion/personas/clientes/buscar-cliente

> ng generate component modulos/administracion/personas/asesores/crear-asesor

> ng generate component modulos/administracion/personas/asesores/editar-asesor

> ng generate component modulos/administracion/personas/asesores/eliminar-asesor

> ng generate component modulos/administracion/personas/asesores/buscar-asesor

> ng generate component modulos/administracion/personas/administradores/crear-administrador

> ng generate component modulos/administracion/personas/administradores/editar-administrador

> ng generate component modulos/administracion/personas/administradores/eliminar-administrador

> ng generate component modulos/administracion/personas/administradores/buscar-administrador

> ng generate component modulos/administracion/inmuebles/crear-inmueble

> ng generate component modulos/administracion/inmuebles/editar-inmueble

> ng generate component modulos/administracion/inmuebles/eliminar-inmueble

> ng generate component modulos/administracion/inmuebles/buscar-inmueble

Ahora se va a crear el componente de solicitudes:
> ng generate component modulos/solicitudes/crear-solicitud

Ahora para crear la plantilla maestra:
> ng generate component plantilla/barra-navegacion

> ng generate component plantilla/pie-pagina

> ng generate component plantilla/inicio

> ng generate component plantilla/error

> ng g c modulos/seguridad/cerrar-sesion

> ng g s servicios/seguridad

> ng g s servicios/registro
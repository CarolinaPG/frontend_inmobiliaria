import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'codigo': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'fotografia': ['', [Validators.required]],
    'videoYoutube': [''],
    'asesor': [[Validators.required]],
    'ciudad': [[Validators.required]],
    'departamento': [[Validators.required]],
    'estado': [[Validators.required]],
    'tipoIn': [[Validators.required]],
    'tipoOf': [[Validators.required]],
  });

  constructor(
    private fb: FormBuilder,

    private servicioRegistro: RegistroService,

    //private router: Router,

  ) { }

  ngOnInit(): void {
  }

  RegistrarInmueble(){
    let codigo = this.fgValidador.controls['codigo'].value;
    let direccion = this.fgValidador.controls['direccion'].value;
    let valor = this.fgValidador.controls['valor'].value;
    let fotografia = this.fgValidador.controls['fotografia'].value;
    let videoYoutube = this.fgValidador.controls['videoYoutube'].value;
    let asesor = this.fgValidador.controls['asesor'].value;
    let ciudad = this.fgValidador.controls['ciudad'].value;
    let departamento = this.fgValidador.controls['departamento'].value;
    let estado = this.fgValidador.controls['estado'].value;
    let tipoIn = this.fgValidador.controls['tipoIn'].value;
    let tiptipoOfIn = this.fgValidador.controls['tipoOf'].value;
    /**
    this.servicioRegistro.RegistrarInmueble(id, tipoId, nombres, apellidos, celular, email, rol)
    .subscribe((datos: any) => {
      //this.servicioRegistro.AlmacenarSesion(datos);  
      alert("Se le ha enviado un correo con sus credenciales de acceso. Recuerde validar su email para poder iniciar sesión.")
      this.router.navigate(['/inicio']);
    }, (error: any) =>{
      // KO
      alert("Datos inválidos")
    });
    */
  }

}

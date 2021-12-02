import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/servicios/registro.service';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
})
export class CrearClienteComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'id': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'recaptcha': [[Validators.requiredTrue]],
  });

  constructor(
    private fb: FormBuilder,

    private servicioRegistro: RegistroService,

    private router: Router,

  ) {}

  ngOnInit(): void {
    //this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  RegistrarCliente(){
    let nombres = this.fgValidador.controls['nombres'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let celular = this.fgValidador.controls['celular'].value;
    let id = this.fgValidador.controls['id'].value;
    let email = this.fgValidador.controls['email'].value;
    let tipoId = "CEDULA";
    let rol = 3;
    this.servicioRegistro.RegistrarCliente(id, tipoId, nombres, apellidos, celular, email, rol)
    .subscribe((datos: any) => {
      //this.servicioRegistro.AlmacenarSesion(datos);  
      alert("Se le ha enviado un correo con sus credenciales de acceso. Recuerde validar su email para poder iniciar sesión.")
      this.router.navigate(['/inicio']);
    }, (error: any) =>{
      // KO
      alert("Datos inválidos")
    });

  }

}

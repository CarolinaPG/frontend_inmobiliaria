import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as crypto from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,

    private servicioSeguridad: SeguridadService,
  
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  recuperarClave(){
    let usuario = this.fgValidador.controls['usuario'].value;
    this.servicioSeguridad.RecuperarClave(usuario)
      .subscribe((datos: any) => {
        //this.servicioSeguridad.AlmacenarSesion(datos);  
        alert("Por favor revise su correo con la nueva contraseña.")
        this.router.navigate(['/seguridad/identificar']);
      }, (error: any) =>{
        // KO
        alert("Datos inválidos")
      });
  }


}

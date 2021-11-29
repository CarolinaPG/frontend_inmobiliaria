import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as crypto from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,

    private servicioSeguridad: SeguridadService,
  
    private router: Router,

  ) {}

  ngOnInit(): void {
    /**
     * setInterval(() =>{
      this.fgValidador.controls["usuario"].setValue(Math.random()*1000)
    }, 2000)
    */
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = crypto.MD5(clave).toString();
    //alert(claveCifrada);
    this.servicioSeguridad.IdentificarPersona(usuario, claveCifrada)
      .subscribe((datos: any) => {
        this.servicioSeguridad.AlmacenarSesion(datos);  
        this.router.navigate(['/inicio']);
        //alert("Datos correctos")
      }, (error: any) =>{
        // KO
        alert("Correo no registrado o no verificado. De lo contrario, revise su usuario y contraseña de nuevo")
      });
  }

}

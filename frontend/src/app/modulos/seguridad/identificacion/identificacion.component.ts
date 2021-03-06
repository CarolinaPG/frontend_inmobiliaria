import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as crypto from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

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

    public dialog: MatDialog,

  ) {}

  ngOnInit(): void {
    /**
     * setInterval(() =>{
      this.fgValidador.controls["usuario"].setValue(Math.random()*1000)
    }, 2000)
    */
  }

  identificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = crypto.MD5(clave).toString();
    //alert(claveCifrada);
    this.servicioSeguridad.IdentificarPersona(usuario, claveCifrada)
      .subscribe((datos: any) => {
        this.servicioSeguridad.AlmacenarSesion(datos);  
        this.router.navigate(['/inicio']);
        //alert(JSON.stringify(datos, null, 2));
      }, (error: any) =>{
        // KO
        alert("Correo no registrado o no verificado. De lo contrario, revise su usuario y contraseña de nuevo")
      });
  }

  openDialog():void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '400px',
      width: '600px',
      data: 'Are you sure the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if(res){
        console.log('Delete file');
      }
    });
  }

  recuperarClave(){
    let usuario = this.fgValidador.controls['usuario'].value;
    this.servicioSeguridad.RecuperarClave(usuario)
      .subscribe((datos: any) => {
        //this.servicioSeguridad.AlmacenarSesion(datos);  
        alert("Por favor revise su correo con la nueva contraseña.");
        this.router.navigate(['/seguridad/identificar']);
      }, (error: any) =>{
        // KO
        alert("Datos inválidos")
      });
  }

}

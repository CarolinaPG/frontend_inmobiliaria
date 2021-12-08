import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as crypto from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]],
  });

  usuarioFormControl = new FormControl('', [
    Validators.required, Validators.email,
  ]);

  passFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private fb: FormBuilder,

    private servicioSeguridad: SeguridadService,
  
    private router: Router,

    public dialog: MatDialogModule,

    public dialogRef: MatDialogRef<ConfirmDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public message:string,

  ) { }

  ngOnInit(): void {
  }

  onClickNO(): void{
    this.dialogRef.close();
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
        alert(JSON.stringify(datos, null, 2));
      }, (error: any) =>{
        // KO
        alert("Correo no registrado o no verificado. De lo contrario, revise su usuario y contraseña de nuevo")
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

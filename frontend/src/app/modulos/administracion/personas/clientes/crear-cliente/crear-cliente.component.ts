import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/servicios/registro.service';
import { MatDialogModule } from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';

interface TipoId {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
})
 
export class CrearClienteComponent implements OnInit {
  completed = false;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  isOptional = false;

  constructor(
    private fb: FormBuilder,

    private servicioRegistro: RegistroService,

    private router: Router,

    public dialog: MatDialogModule,

    private _formBuilder: FormBuilder,
  ) { }

  completeStep(): void{
    this.completed = true;
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]]
    });
    this.secondFormGroup = this._formBuilder.group({
      tipoId: ['', [Validators.required]],
      id: ['', [Validators.required]]
    });
    this.thirdFormGroup = this._formBuilder.group({
      celular: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  registrarCliente(){
    let nombres = this.firstFormGroup.controls['nombres'].value;
    let apellidos = this.firstFormGroup.controls['apellidos'].value;
    let tipoId = this.secondFormGroup.controls['tipoId'].value;
    let id = this.secondFormGroup.controls['id'].value;
    let celular = this.thirdFormGroup.controls['celular'].value;
    let email = this.thirdFormGroup.controls['email'].value;
    let rol = 3;
    this.servicioRegistro.RegistrarCliente(id, tipoId, nombres, apellidos, celular, email, rol)
    .subscribe((datos: any) => {
      //this.servicioRegistro.AlmacenarSesion(datos);
      alert("Se le ha enviado un correo con sus credenciales de acceso. Recuerde validar su email para poder iniciar sesión.")
      this.router.navigate(['/inicio']);
    }, (error: any) =>{
      // KO
      alert(JSON.stringify(error, null, 2))
    });

  }


}

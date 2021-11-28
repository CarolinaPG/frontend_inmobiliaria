import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  RegistrarCliente(){
    let nombres = this.fgValidador.controls['nombres'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let celular = this.fgValidador.controls['celular'].value;
    let id = this.fgValidador.controls['id'].value;
    let email = this.fgValidador.controls['email'].value;
    alert(nombres);
    alert(apellidos);
    alert(celular);
    alert(id);
    alert(email);
  }

}

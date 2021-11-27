import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

//import { QuestionBase } from './question-base';
//import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
//  providers: [ QuestionControlService ]
})
export class CrearClienteComponent implements OnInit {

  //@Input() questions: QuestionBase<string>[] | null = [];
  //form!: FormGroup;
  //payLoad = '';

  constructor() { }
  //constructor(private qcs: QuestionControlService) {}

  ngOnInit(): void {
    //this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    //this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}

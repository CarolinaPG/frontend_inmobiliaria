import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';
//const moment = _rollupMoment || _moment;
const moment = _moment;

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class ConfirmDialogComponent implements OnInit {
  date = new Date();
  minDate = this.date;
  maxDate = new Date(2040, 11, 31);

  //start = new FormControl(this.date);
  //end = new FormControl();
  myGroup = new FormGroup({
    start: new FormControl(this.date),
    end: new FormControl()
  });

  /*range = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(),
  });*/

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  solicitar(){
    let fechaI = this.myGroup.controls['start'].value;
    let fechaF = this.myGroup.controls['end'].value;
    alert(fechaI);
    console.log(true);
    alert("Entrado a solicitar()");
  }

}

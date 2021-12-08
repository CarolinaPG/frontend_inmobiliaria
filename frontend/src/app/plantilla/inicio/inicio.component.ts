import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  showFiller = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}

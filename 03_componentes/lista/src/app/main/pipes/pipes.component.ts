import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nNumber: number;
  nPercent: number;
  nPrecio: number;
  dFecha: Date;
  oLibro:  {autor: string; titulo: string};

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe pérez';
    this.nNumber = 34.8734;
    this.nPercent = 0.54;
    this.nPrecio = 35.507;
    this.dFecha = new Date();
    this.oLibro = {autor: 'Cervantes', titulo: 'El Quijo'};
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  sNombre: string;
  nNumber: number;
  isSpanish: boolean;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.nNumber = 22;
  }

  btnBorrar () {
    this.sNombre = '';
  }
}

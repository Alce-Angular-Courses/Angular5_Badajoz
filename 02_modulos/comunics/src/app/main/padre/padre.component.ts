import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sNombre: string;

  constructor() { }

  ngOnInit() {
  }

  responderRecibido(sDatos) {
    this.sNombre = sDatos;
  }
}

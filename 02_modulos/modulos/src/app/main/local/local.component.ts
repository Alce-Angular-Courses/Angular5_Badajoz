import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-local',
  encapsulation: ViewEncapsulation.Native,
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @ViewChild('nombre') eNombre: any;

  // ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.eNombre);
  }

}

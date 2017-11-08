import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista4',
  templateUrl: './lista4.component.html',
  styleUrls: ['./lista4.component.css']
})
export class Lista4Component implements OnInit {

  aIdeas: Array<string>;
  sIdea: string;

  constructor() { }

  ngOnInit() {
    this.aIdeas = [];
  }

  addIdeas () {
    this.aIdeas.push(this.sIdea);
  }

}

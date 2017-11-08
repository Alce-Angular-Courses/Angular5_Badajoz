import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

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

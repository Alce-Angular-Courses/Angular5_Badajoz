import { Http } from '@angular/http'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-google',
  templateUrl: './lista-google.component.html',
  styleUrls: ['./lista-google.component.css']
})
export class ListaGoogleComponent implements OnInit {

  sURL: string;
  aLibros: Array<string>;
  sClave: string;

  constructor(public http: Http ) { }

  ngOnInit() {
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    this.aLibros = [];
  }

  buscarPromesa() {

      this.http.get(this.sURL+this.sClave).toPromise()
      .then(
        (response)=>{
          const aDatos = response.json().items;
          aDatos.forEach(element => {
            this.aLibros.push(element.volumeInfo.title)
          });
          console.log(aDatos)
        }, // Función en caso de acierto
        (error)=>{
          console.log(error);
        }, // Función en caso de error
      )
  }

  buscarReactive() {
    
          this.http.get(this.sURL+this.sClave)
  }

}

import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-async',
  templateUrl: './lista-async.component.html',
  styleUrls: ['./lista-async.component.css']
})
export class ListaAsyncComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.librosService.buscarLibrosAsync(this.sClave)
    .then(JSON.parse)
    .then(
      (response)=>{
        this.aLibros = response;
      }, // Función en caso de acierto
      (error)=>{
        console.log(error);
      }, // Función en caso de error
    )
  
   
  }

}

import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class GoogleService {

  sURL: string;

  constructor(public http: Http) {
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
   }

  buscarLibros (clave: string) {
    return this.http.get(this.sURL+clave).map(
        response => this.extractTitles(response),
        error => console.log(error)
        );
    }
  
    private extractTitles(response: Response) {
      if(response.json().items) {
        return response.json().items.map(
          book => book.volumeInfo.title);
        }
      else {return response}
  }
}

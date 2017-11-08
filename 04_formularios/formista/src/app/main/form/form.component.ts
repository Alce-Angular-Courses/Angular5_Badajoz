import { Component, OnInit } from '@angular/core';
import { Printer, PrinterModel} from '../../models/printers';
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  aPrinters : Array<Printer>;

  constructor() { }

  ngOnInit() {
    this.aPrinters = [
      new PrinterModel (1, 'HP', 'Tinta'),
      new PrinterModel (2, 'Brother', 'laser'),
      {id: 2, modelo: 'Xerox', tipo: 'laser'}
    ]
  }

}

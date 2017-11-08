import { Component, ViewChild, OnInit } from '@angular/core';
import { UserModel } from './../../models/usuario';
import { DepartamentoModel } from './../../models/departaments';
import { Printer, PrinterModel} from '../../models/printers';
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  aPrinters : Array<Printer>;
  impresoraSeleccionada: Printer;
  isColor: boolean;
  isClaro: boolean;
  aDepartamentos: Array<DepartamentoModel>;
  departamentoSeleccionado: DepartamentoModel;
  user: UserModel;
  @ViewChild('formulario') formulario: any;
  mostrarFinal: boolean;

  constructor() { }

  ngOnInit() {
    this.aPrinters = [
      new PrinterModel (1, 'HP', 'Tinta'),
      new PrinterModel (2, 'Brother', 'laser'),
      {id: 2, modelo: 'Xerox', tipo: 'laser'}
    ]
    this.aDepartamentos = [
      new DepartamentoModel(1, 'Ventas'),
      new DepartamentoModel(2, 'Marketing'),
      new DepartamentoModel(3, 'Mantenimiento'),
      new DepartamentoModel(4, 'Dirección'),
      new DepartamentoModel(5, 'Sistemas'),
    ]

    this.user = new UserModel ('', '', '', '');
    console.log(this.formulario)
  } // Fin de onInit

  enviar() {
    this.mostrarFinal= true;
  }

  borrar() {
    this.formulario.reset();
  }

}

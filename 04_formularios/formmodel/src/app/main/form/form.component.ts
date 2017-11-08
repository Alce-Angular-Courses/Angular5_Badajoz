import { Component, OnInit } from '@angular/core';
import { UserModel } from './../../models/usuario';
import { DepartamentoModel } from './../../models/departaments';
import { Printer, PrinterModel} from '../../models/printers';
import { FormGroup, FormControl, Validators} from '@angular/forms'
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  aPrinters : Array<Printer>;
  aDepartamentos: Array<DepartamentoModel>;
  mostrarFinal: boolean;
  formulario: FormGroup;

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

    this.formulario = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(4)]),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required,Validators.pattern('^\\d{9}$')]),
      impresora: new FormControl(),
      color: new FormControl(true),
      claro: new FormControl(true),
      departamento: new FormControl(),
    })

    console.log(this.formulario)

  } // Fin de onInit

  enviar() {
    this.mostrarFinal= true;
  }

  borrar() {
    this.formulario.reset();
  }

}

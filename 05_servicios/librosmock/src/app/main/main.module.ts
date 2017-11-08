import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListaComponent
    ],
  exports : [
    ListaComponent],
})
export class MainModule { }

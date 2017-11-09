import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ListaAsyncComponent } from './lista-async/lista-async.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListaComponent,
    ListaAsyncComponent
    ],
  exports : [
    ListaComponent,
    ListaAsyncComponent],
})
export class MainModule { }

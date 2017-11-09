import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ListaAsyncComponent } from './lista-async/lista-async.component';
import { ListaGoogleComponent } from './lista-google/lista-google.component';
import { ListaSrvhttpComponent } from './lista-srvhttp/lista-srvhttp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListaComponent,
    ListaAsyncComponent,
    ListaGoogleComponent,
    ListaSrvhttpComponent
    ],
  exports : [
    ListaComponent,
    ListaAsyncComponent,
    ListaGoogleComponent,
    ListaSrvhttpComponent],
})
export class MainModule { }

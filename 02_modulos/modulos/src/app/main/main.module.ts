import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { LocalComponent } from './local/local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BindingComponent,
    LocalComponent
  ],
  exports : [
    BindingComponent,
    LocalComponent
  ]
})
export class MainModule { }

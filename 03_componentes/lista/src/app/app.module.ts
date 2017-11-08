import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainModule,
    SharedModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

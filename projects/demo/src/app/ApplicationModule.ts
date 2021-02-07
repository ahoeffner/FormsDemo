import { NgModule } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { MaterialModules } from './MaterialModules';
import { BrowserModule } from '@angular/platform-browser';

// Formsdefinitions



@NgModule({
  declarations: [
    ApplicationRoot
  ],
  imports: [
    BrowserModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [ApplicationRoot]
})

export class ApplicationModule { }

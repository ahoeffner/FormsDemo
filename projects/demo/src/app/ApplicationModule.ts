import { NgModule } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { MaterialModules } from './MaterialModules';
import { BrowserModule } from '@angular/platform-browser';

// Formsdefinitions

import { Test1 } from './Forms/Test1/Test1';



@NgModule({
  declarations: [
    ApplicationRoot,
    Test1
  ],
  imports: [
    BrowserModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [ApplicationRoot]
})

export class ApplicationModule { }

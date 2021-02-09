import { NgModule } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { MaterialModules } from './MaterialModules';
import { BrowserModule } from '@angular/platform-browser';
import { Application, FormsLibrary, FormsDefinition } from 'm42forms';

// Formsdefinitions

import { Test1 } from './Forms/Test1/Test1';
import { Test2 } from './Forms/Test2/Test2';
import { TestPopup } from './Forms/TestPopup';


const forms:FormsDefinition[] =
[
    {component: Test1, title: "Test1"},
    {component: Test2, title: "Test2"}
];



@NgModule({
  declarations: [
    ApplicationRoot,
    Test1, Test2, TestPopup
  ],
  imports: [
    BrowserModule,
    MaterialModules,
    FormsLibrary
  ],
  providers: [],
  bootstrap: [ApplicationRoot]
})


export class ApplicationModule
{
    constructor(app:Application)
    {
        app.title = "Demo";
        app.setFormsDefinitions(forms);
        app.showpopup(TestPopup);
    }
}

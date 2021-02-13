import { NgModule } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { MaterialModules } from './MaterialModules';
import { BrowserModule } from '@angular/platform-browser';
import { Application, FormsLibrary, FormsDefinition } from 'm42forms';

// Formsdefinitions

import { Test1 } from './Forms/Test1/Test1';
import { Test2 } from './Forms/Test2/Test2';
import { Test3 } from './Forms/Test3/Test3';


const forms:FormsDefinition[] =
[
    {component: Test1, title: "Demo Form Test1", path: "/forms/test1"},
    {component: Test2, title: "Demo Form Test2", path: "/forms/test2"},
    {component: Test3, title: "Demo Form Test3", path: "/modal/test3", modal: {}}
];


@NgModule({
  declarations: [
    ApplicationRoot,
    Test1, Test2, Test3
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
    }
}

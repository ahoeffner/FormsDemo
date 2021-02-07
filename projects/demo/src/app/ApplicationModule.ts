import { NgModule,ComponentRef } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { MaterialModules } from './MaterialModules';
import { BrowserModule } from '@angular/platform-browser';
import { Application, FormsLibrary, FormsDefinition, Builder } from 'm42forms';

// Formsdefinitions

import { Test1 } from './Forms/Test1/Test1';
import { Test2 } from './Forms/Test2/Test2';


const forms:FormsDefinition[] =
[
    {name: "test1", title: "Test1", component: Test1},
    {name: "test2", title: "Test2", component: Test2}
];



@NgModule({
  declarations: [
    ApplicationRoot,
    Test1, Test2
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
    form:string = "test1";

    constructor(private app:Application)
    {
        app.title = "Demo";
        app.setFormsDefinitions(forms);
        //app.showform("test1");
    }

    public showform() : void
    {
      this.app.showform(this.form);

      if (this.form == "test1") this.form = "test2";
      else this.form = "test1";

      setTimeout(() => this.showform(),10000);
    }
}

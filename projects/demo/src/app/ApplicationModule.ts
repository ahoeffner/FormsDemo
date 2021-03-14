import { NgModule } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { MaterialModules } from './MaterialModules';
import { BrowserModule } from '@angular/platform-browser';
import { Application, FormsLibrary, FORM } from 'forms42';

// Formsdefinitions

import { Test1 } from './forms/Test1';
import { Test2 } from './forms/Test2';
import { Test3 } from './forms/Test3';


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


@FORM(Test1,"Demo Form Test1","/forms/test1")
@FORM(Test2,"Demo Form Test2","/forms/test2")
@FORM(Test3,"Demo Form Test3","/wizards/test3")

export class ApplicationModule
{
    public func() {}

    constructor(app:Application)
    {
        app.Title = "Demo";
        //app.preferences.setTheme("yellow");
    }
}

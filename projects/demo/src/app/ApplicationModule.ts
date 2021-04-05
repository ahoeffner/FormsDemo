import { NgModule } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { MaterialModules } from './MaterialModules';
import { BrowserModule } from '@angular/platform-browser';
import { Application, FormsLibrary, form } from 'forms42';

// Formsdefinitions

import { Test1 } from './forms/Test1';
import { Test3 } from './forms/Test3';

import { Countries } from './forms/Countries';
import { Locations } from './forms/Locations';
import { Employees } from './forms/Employees';


@NgModule({
  declarations: [
    ApplicationRoot,
    Test1, Test3, Countries, Locations, Employees
  ],
  imports: [
    BrowserModule,
    MaterialModules,
    FormsLibrary
  ],
  providers: [],
  bootstrap: [ApplicationRoot]
})


@form(Test1,"Demo Form Test1","/forms/test1")
@form(Test3,"Demo Form Test3","/wizards/test3")

@form(Countries,"Countries","/master data/countries")
@form(Locations,"Locations","/master data/locations")
@form(Employees,"Employees","/master data/Employees")


export class ApplicationModule
{
    constructor(app:Application)
    {
        app.title = "Demo";
        app.theme = "pink";
    }
}

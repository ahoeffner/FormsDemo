import { NgModule } from '@angular/core';
import { ApplicationRoot } from './ApplicationRoot';
import { MaterialModules } from './MaterialModules';
import { BrowserModule } from '@angular/platform-browser';
import { Application, FormsLibrary, form } from 'forms42';

// Formsdefinitions

import { Wizard       } from './forms/Wizard';
import { ControlBlock } from './forms/ControlBlock';

import { Countries    } from './forms/Countries';
import { Locations    } from './forms/Locations';
import { Employees    } from './forms/Employees';
import { LocDeptEmp   } from './forms/LocDeptEmp';


@NgModule({
  declarations: [
    ApplicationRoot,
    ControlBlock, Wizard, Countries, Locations, Employees, LocDeptEmp
  ],
  imports: [
    BrowserModule,
    MaterialModules,
    FormsLibrary
  ],
  providers: [],
  bootstrap: [ApplicationRoot]
})


@form(LocDeptEmp  , "Locations"      ,"/forms/Location"        )
@form(ControlBlock, "Control Block"  ,"/forms/Ctrlblk"         )

@form(Countries   , "Countries"      ,"/master data/countries" )
@form(Locations   , "Locations"      ,"/master data/locations" )
@form(Employees   , "Employees"      ,"/master data/Employees" )


export class ApplicationModule
{
    constructor(app:Application)
    {
        app.title = "Demo";
        app.theme = "yellow";
    }
}

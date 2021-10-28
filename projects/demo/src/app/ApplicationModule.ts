import { NgModule } from '@angular/core';
import { FormsLibrary, form } from 'forms42';
import { ApplicationRoot } from './ApplicationRoot';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsLibrary,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ApplicationRoot]
})


@form(Countries    , "Countries"      , "/master data/countries"    )
@form(Locations    , "Locations"      , "/master data/locations"    )
@form(Employees    , "Employees"      , "/master data/Employees"    )
@form(LocDeptEmp   , "Locations"      , "/combined views/Location"  )
@form(ControlBlock , "Control Block"  , "/control blocks/example"   )


export class ApplicationModule {}

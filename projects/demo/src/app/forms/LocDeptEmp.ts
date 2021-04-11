import { Component } from '@angular/core';
import { Locations } from '../blocks/Locations';
import { block, Form } from 'forms42';


@Component({
    templateUrl: 'LocDeptEmp.html',
    styleUrls: [ './LocDeptEmp.css' ]
})


@block({component: Locations, databaseopts: {insert: false}})

export class LocDeptEmp extends Form
{
}
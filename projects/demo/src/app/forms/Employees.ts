import { block, Form } from 'forms42';
import { Component } from '@angular/core';
import { Employees as Employee } from '../blocks/Employees';


@Component({
    templateUrl: 'Employees.html',
    styleUrls: [ './Employees.css' ]
})


export class Employees extends Form
{
    @block({component: Employee}) private emp:Employee;

    public current(row:number) : string
    {
        if (row == this.getCurrentRow("emp")) return(this.colors.topbar);
        else return("");
    }


    public setDepartment() : void
    {
        this.emp.changeDepartment(0,90);
    }
}
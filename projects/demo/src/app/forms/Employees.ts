import { block, Form } from 'forms42';
import { Component } from '@angular/core';
import { Employees as Employee } from '../blocks/Employees';


@Component({
    templateUrl: 'Employees.html',
    styleUrls: [ './Employees.css' ]
})


export class Employees extends Form
{
    @block({component: Employee}) public emp:Employee;
}
import { block, Form } from 'forms42';
import { Component } from '@angular/core';
import { Employees as Employee } from '../blocks/Employees';


@Component({
    templateUrl: 'Employees.html',
    styleUrls: [ './Employees.css' ]
})

@block({component: Employee})

export class Employees extends Form
{
}
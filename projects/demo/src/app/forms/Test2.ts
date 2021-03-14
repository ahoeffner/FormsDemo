import { BLOCK, DATABASE, Form } from 'forms42';
import { Component } from '@angular/core';
import { Employees } from '../blocks/Employees';
import { Departments } from '../blocks/Departments';


@Component({
    selector: 'test2',
    templateUrl: 'Test2.html',
	styleUrls: []
})

@BLOCK("emp",Employees)
@BLOCK("dept",Departments)

export class Test2 extends Form
{
}
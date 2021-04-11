import { Component } from '@angular/core';
import { Employees as Employee } from '../blocks/Employees';
import { block, Case, Form, listofvalues, ListOfValues } from 'forms42';


@Component({
    templateUrl: 'Employees.html',
    styleUrls: [ './Employees.css' ]
})


export class Employees extends Form
{
    @block({component: Employee}) public emp:Employee;

    @listofvalues("emp.department_id")
    public departments() : ListOfValues
    {
        let lov:ListOfValues =
        {
            minlen: 0,
            force: true,
            postfix: "%",

            title: "Departments form",

            sql: `  select department_id, department_name
                    from departments
                    where lower(department_name) like lower(:filter)
                    order by 2`,

            case: Case.lower,
            fieldmap: new Map<string,string>()
        }

        return(lov);
    }
}
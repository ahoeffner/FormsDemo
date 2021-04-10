import { block, Case, FieldTriggerEvent, Form, listofvalues, ListOfValues, trigger, Trigger } from 'forms42';
import { Component } from '@angular/core';
import { Employees as Employee } from '../blocks/Employees';


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


    @trigger(Trigger.WhenValidateField,"empl.hire_date")
    public async validate(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        console.log("Form validate "+trigger.field);
        return(true);
    }
}
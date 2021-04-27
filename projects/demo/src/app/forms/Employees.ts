import { Component } from '@angular/core';
import { Employees as Employee } from '../blocks/Employees';
import { block, Case, Form, listofvalues, ListOfValues, connect, disconnect, show, SQLTriggerEvent, trigger, Trigger, window } from 'forms42';


@Component({
    templateUrl: 'Employees.html',
    styleUrls: [ './Employees.css' ]
})


@window(true,"1024px","550px","40px")
export class Employees extends Form
{
    @block({component: Employee}) public emp:Employee;


    @show
    public async autoquery()
    {
        if (this.parameters.size > 0)
            this.executequery();
    }


    @trigger(Trigger.PreQuery,"emp")
    public async prequery(event:SQLTriggerEvent) : Promise<boolean>
    {
        if (this.parameters.size > 0)
        {
            this.parameters.forEach((value,column) =>
            {event.stmt.whand(column,value);});

            this.parameters.clear();
        }

        return(true);
    }


    @listofvalues("emp.department_id")
    public departments() : ListOfValues
    {
        let lov:ListOfValues =
        {
            minlen: 0,
            force: true,
            postfix: "%",
            autoquery: true,

            title: "Departments",

            sql: `  select department_id, department_name
                    from departments
                    where lower(department_name) like :filter
                    order by 2`,

            case: Case.lower,

            fieldmap: new Map<string,string>()
            .set("department_id","department_id")
        }

        return(lov);
    }


    @connect
    public async getSalaryLimit() : Promise<void>
    {
        this.emp.getSalaryLimits();
    }


    @disconnect
    public async clearSalaryLimit() : Promise<void>
    {
        this.emp.clearSalaryLimits();
    }
}
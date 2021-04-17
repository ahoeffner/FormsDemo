import { Component } from '@angular/core';
import { Employees } from '../blocks/Employees';
import { Locations } from '../blocks/Locations';
import { Departments } from '../blocks/Departments';
import { block, Form, join, field, init, FieldTriggerEvent, trigger, Trigger } from 'forms42';


@Component({
    templateUrl: 'LocDeptEmp.html',
    styleUrls: [ './LocDeptEmp.css' ]
})


@block({component: Locations, alias  : "loc"  , databaseopts: {insert: false}})
@block({component: Departments,alias : "dept" , databaseopts: {insert: false}})
@block({component: Employees,alias   : "emp"  , databaseopts: {insert: false}})


@field({name: "loc.city.table", fieldoptions: {insert: false, update: false, query: false}})
@field({name: "loc.location_id.table", fieldoptions: {insert: false, update: false, query: false}})

@field({name: "loc.location_id.detail", fieldoptions: {insert: true, update: true}})

@join({master: {alias: "loc", key: "primary"}, detail: {alias: "dept", key: "locations"}})
@join({master: {alias: "dept", key: "primary"}, detail: {alias: "emp", key: "departments"}})


export class LocDeptEmp extends Form
{
    @init
    public reorder() : void
    {
        this.groupfields(["loc-table","loc-details","dep-table"]);
    }

    
    // Override as we dont need department name
    @trigger(Trigger.PostChange,"emp.department_id")
    public async setDepartment(event:FieldTriggerEvent) : Promise<boolean>
    {
        return(true);
    }
}
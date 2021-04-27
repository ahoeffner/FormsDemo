import { Component } from '@angular/core';
import { Employees } from '../blocks/Employees';
import { Locations } from '../blocks/Locations';
import { Departments } from '../blocks/Departments';
import { block, Form, join, field, FieldTriggerEvent, trigger, Trigger, keytrigger, KeyTriggerEvent, keymap, Block } from 'forms42';


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
    @keytrigger(keymap.zoom)
    public async zoom(event:KeyTriggerEvent) : Promise<boolean>
    {
        let block:Block = this.getBlock(event.block);

        if (block.displayed(event.record))
        {
            if (event.block == "emp")
            {
                let params:Map<string,number> = new Map<string,number>();
                params.set("employee_id",block.getValue(event.record,"employee_id"));

                this.callform("employees",params);
            }
        }

        return(true);
    }


    // Override as we dont need department name
    @trigger(Trigger.PostChange,"emp.department_id")
    public async setDepartment(event:FieldTriggerEvent) : Promise<boolean>
    {
        return(true);
    }
}
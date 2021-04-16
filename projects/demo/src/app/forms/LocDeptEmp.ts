import { Component } from '@angular/core';
import { Locations } from '../blocks/Locations';
import { Departments } from '../blocks/Departments';
import { block, Form, join, field, init } from 'forms42';


@Component({
    templateUrl: 'LocDeptEmp.html',
    styleUrls: [ './LocDeptEmp.css' ]
})


@block({component: Locations, alias: "loc", databaseopts: {insert: true}})
@block({component: Departments,alias: "dept", databaseopts: {insert: false}})

@field({name: "loc.city.table", fieldoptions: {insert: false, update: false, query: false}})
@field({name: "loc.location_id.table", fieldoptions: {insert: false, update: false, query: false}})

@field({name: "loc.location_id.detail", fieldoptions: {insert: true, update: true}})

@join({master: {alias: "loc", key: "primary"}, detail: {alias: "dept", key: "locations"}})


export class LocDeptEmp extends Form
{
    @init
    public reorder() : void
    {
        this.groupfields(["loc-table","loc-details","dep-table"]);
    }
}
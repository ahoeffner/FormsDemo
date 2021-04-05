import { Component } from '@angular/core';
import { Form, block, field } from 'forms42';
import { Locations as location } from '../blocks/Locations';

@Component({
    templateUrl: 'Locations.html',
    styleUrls: [ './Locations.css' ]
})


@field({name: "loc.city.table", fieldoptions: {query: false,  insert: false, update: false}})
@field({name: "loc.location_id.table", fieldoptions: {query: false,  insert: false, update: false}})

@block({component: location, alias: "loc"})

export class Locations extends Form
{
    public current(row:number) : string
    {
        if (row == this.getCurrentRow("loc")) return(this.colors.topbar);
        else return("");
    }
}
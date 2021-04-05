import { block, Form } from 'forms42';
import { Component } from '@angular/core';
import { Countries as Country } from '../blocks/Countries';


@Component({
    templateUrl: 'Countries.html',
    styleUrls: [ './Countries.css' ]
})

@block({component: Country})

export class Countries extends Form
{
    public current(row:number) : string
    {
        if (row == this.getCurrentRow("country")) return(this.colors.topbar);
        else return("");
    }
}
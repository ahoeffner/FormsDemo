import { Preferences } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'forms-app',
    templateUrl: './ApplicationRoot.html',
    styleUrls: []
})


export class ApplicationRoot
{
    public sidenav:boolean = true;
    public barcolor:string = new Preferences().primaryColor;
}

import { Application } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'forms-app',
    templateUrl: './ApplicationRoot.html',
    styleUrls: [ './ApplicationRoot.css' ]
})


export class ApplicationRoot
{
    public sidenav:boolean = true;
    public btncolor:string = this.app.preferences.btnTextColor;
    public barcolor:string = this.app.preferences.primaryColor;

    constructor(private app:Application) {}

    public close() : void
    {
        this.app.close();
    }
}

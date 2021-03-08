import { Application } from 'forms42';
import { Component } from '@angular/core';


@Component({
    selector: 'forms-app',
    templateUrl: './ApplicationRoot.html',
    styleUrls: [ './ApplicationRoot.css' ]
})


export class ApplicationRoot
{
    public sidenav:boolean = true;

    constructor(private app:Application) {}

    public get barcolor() : string
    {
        return(this.app.preferences.colors.topbar);
    }

    public get btncolor() : string
    {
        return(this.app.preferences.colors.buttontext);
    }

    public close() : void
    {
        this.app.closeform(true);
    }
}
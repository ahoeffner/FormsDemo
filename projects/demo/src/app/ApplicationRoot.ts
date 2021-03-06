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
    public barcolor:string = this.app.preferences.colors.topbar;
    public btncolor:string = this.app.preferences.colors.buttontext;

    constructor(private app:Application) {}

    public get title() : string
    {
        return(this.app.AppOrFormTitle);
    }

    public close() : void
    {
        this.app.closeform(true);
    }
}
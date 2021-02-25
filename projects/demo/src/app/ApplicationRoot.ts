import { Application } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'forms-app',
    templateUrl: './ApplicationRoot.html',
    styleUrls: [ './ApplicationRoot.css' ]
})


export class ApplicationRoot
{
    public sidenav:boolean = false;
    public barcolor:string = this.app.preferences.colors.topbar;
    public btncolor:string = this.app.preferences.colors.buttontext;

    constructor(private app:Application) {}

    public close() : void
    {
        this.app.closeform();
    }
}

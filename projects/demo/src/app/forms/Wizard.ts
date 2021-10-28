import { Component } from '@angular/core';
import { Form, wizard, window, database } from 'forms42';


@Component({
    templateUrl: 'Wizard.html',
    styleUrls: []
})

@wizard()
@window(true,400,300)
@database({query:true})

export class Wizard extends Form
{
	public n:number = 1;

	public add()
	{
		this.n++;
	}
}
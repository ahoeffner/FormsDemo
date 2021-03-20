import { Component } from '@angular/core';
import { Form, wizard, window, database } from 'forms42';


@Component({
    selector: 'test3',
    templateUrl: 'Test3.html',
    styleUrls: []
})

@wizard()
@window(true,200,200,400,400)
@database({query:true})

export class Test3 extends Form
{
	public n:number = 1;

	public add()
	{
		this.n++;
	}
}
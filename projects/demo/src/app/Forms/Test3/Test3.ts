import { Component } from '@angular/core';
import { Form, WIZARD, WINDOW } from 'forms42';


@Component({
    selector: 'test3',
    templateUrl: 'Test3.html',
    styleUrls: []
})

@WIZARD()
@WINDOW(true,200,200,400,400)

export class Test3 extends Form
{
	public n:number = 1;

	public add()
	{
		this.n++;
	}
}
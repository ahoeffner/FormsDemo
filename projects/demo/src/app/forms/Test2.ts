import { Form } from 'forms42';
import { Component } from '@angular/core';


@Component({
    selector: 'test2',
    templateUrl: 'Test2.html',
	styleUrls: []
})


export class Test2 extends Form
{
	public n:number = 1;

	public add()
	{
		this.n++;
	}
}
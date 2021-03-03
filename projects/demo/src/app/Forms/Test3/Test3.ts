import { Form } from 'forms42';
import { Component } from '@angular/core';


@Component({
    selector: 'test3',
    templateUrl: 'Test3.html',
    styleUrls: []
})


export class Test3 extends Form
{
	public n:number = 1;

	public add()
	{
		this.n++;
	}
}
import { Form } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'test3',
    template:
    `
    <div>
    Test3
    <button (click)="callform('test1')">Test1</button>
    <button (click)="add()">Up</button>
    state: {{n}}
    </div>
  `,
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
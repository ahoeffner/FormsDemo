import { Form } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'test2',
    template:
    `
      Test2 {{n}} <button (click)="add()">Up</button>
    `,
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

import { Component } from '@angular/core';
import { Form } from 'm42forms';


@Component({
    selector: 'popup',
    template:
    `
      Test3 {{n}} <button (click)="add()">Up</button><br>
      <button (click)="close()">Close</button>
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
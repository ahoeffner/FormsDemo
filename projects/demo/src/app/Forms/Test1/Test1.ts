import { Form } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'test1',
    template:
    `
      Test1 {{n}} <button (click)="add()">Up</button>
    `,
    styleUrls: []
})


export class Test1 extends Form
{
  public n:number = 1;

	public add()
	{
		this.n++;
	}
}

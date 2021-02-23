import { Form } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'test2',
    template:
    `
	  <div>
	  Test2
      <button (click)="callform('test3')">Test3</button>
      <button (click)="add()">Up</button>
	  state : {{n}}
	  </div>
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
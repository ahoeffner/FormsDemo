import { Form } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'test2',
    template:
    `
	  <div>
      <button (click)="add()">Up</button>
      <button (click)="callform('test3')">call test3</button>
	  <button (click)="close()">Close</button>
	  {{n}}
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
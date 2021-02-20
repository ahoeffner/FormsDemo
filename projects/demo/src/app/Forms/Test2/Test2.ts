import { Form } from 'm42forms';
import { Test3 } from '../Test3/Test3';
import { Component } from '@angular/core';


@Component({
    selector: 'test2',
    template:
    `
	  <div style="background-color: coral;">
      Test2 {{n}} <button (click)="add()">Up</button>
      <button (click)="callForm('test3')">Test3</button>
	  <button (click)="close()">Close</button>
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
import { Form } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'test2',
    template:
    `
	  <div style="background-color: coral;">
      Test2 {{n}} <button (click)="add()">Up</button>
      <button (click)="newform('test1')" >new test1</button>
      <button (click)="callform('test1')">call test1</button>
      <button (click)="showform('test1')">show test1</button>
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
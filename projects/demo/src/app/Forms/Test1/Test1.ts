import { Form } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'test1',
    template:
    `
      <div style="background-color: coral;">
      Test1 {{n}} <button (click)="add()">Up</button>
      <button (click)="callForm('test2')">Test2</button>
      <button (click)="close()">Close</button>
      </div>
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

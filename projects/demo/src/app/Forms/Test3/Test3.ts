import { Form } from 'm42forms';
import { Test1 } from '../Test1/Test1';
import { Component } from '@angular/core';


@Component({
    selector: 'test3',
    template:
    `
    <div style="background-color: coral;">
    Test3 {{n}} <button (click)="add()">Up</button>
    <button (click)="callForm('test1')">Test1</button>
    <button (click)="close()">Close</button>
    </div>
  `,
    styleUrls: []
})


export class Test3 extends Form
{
  public n:number = 1;

  constructor()
  {
    super();
    this.setCallback(this.callback);
  }

	public add()
	{
		this.n++;
	}

  public callback(form:Form) : void
  {
    console.log(form.constructor.name+" closed n="+(form as Test1).n);
  }
}
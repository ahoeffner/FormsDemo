import { Block1 } from './/Block1';
import { Test2 } from '../Test2/Test2';
import { Component } from '@angular/core';
import { Form, BLOCK } from 'm42forms';


@Component({
    selector: 'test1',
    template:
    `
      <div style="background-color: coral;">
      Test1 {{n}} <button (click)="add()">Up</button>
      <button (click)="callForm('test2')">Test2</button>
      <button (click)="close()">Close</button>
      <button (click)="emp.sayHello('World')">Hello</button>
      </div>
    `,
    styleUrls: []
})



export class Test1 extends Form
{
  public n:number = 1;
  @BLOCK("emp") public emp:Block1 = new Block1();


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
    console.log(form.constructor.name+" closed n="+(form as Test2).n);
    this.clearStack();
  }
}

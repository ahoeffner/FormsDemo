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

	public add()
	{
		this.n++;
	}

  public start() : void
  {
    this.setCallback(this.callback);
    this.getParameters().forEach((value,key) => {console.log(key+"="+value)});
  }

  public callback(form:Form, cancelled:boolean) : void
  {
    console.log((form as Test2).n+" cancel="+cancelled);
    this.clearStack();
  }
}

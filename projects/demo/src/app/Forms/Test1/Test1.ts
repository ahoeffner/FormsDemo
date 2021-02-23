import { Block1 } from './/Block1';
import { Test2 } from '../Test2/Test2';
import { Form, BLOCK } from 'm42forms';
import { Component } from '@angular/core';
import { CustomMenu } from '../../Menus/CustomMenu';


@Component({
    selector: 'test1',
    template:
    `
      <div>
      Test1
      <button (click)="callform('test2')">Test2</button>
      <button (click)="add()">Up</button>
      state: {{n}}
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

  public init() : void
  {
    this.setMenu(new CustomMenu());
    this.setCallback(this.callback);
    this.getParameters().forEach((value,key) => {console.log(key+"="+value)});
  }

  public callback(form:Form, cancelled:boolean) : void
  {
    //this.clearStack();
  }
}

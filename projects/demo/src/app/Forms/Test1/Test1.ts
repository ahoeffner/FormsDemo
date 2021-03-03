import { Block1 } from './/Block1';
import { Component } from '@angular/core';
import { Form, BLOCK, INIT } from 'forms42';
import { CustomMenu } from '../../Menus/CustomMenu';


@Component({
    selector: 'test1',
    templateUrl: 'Test1.html',
    styleUrls: []
})


@BLOCK("emp",Block1)

export class Test1 extends Form
{
  	public n:number = 1;

	public add()
	{
		this.n++;
	}

  	@INIT
	public init() : void
	{
		this.setMenu(new CustomMenu());
		this.setCallback(this.callback);
		this.getParameters().forEach((value,key) => {console.log(key+"="+value)});
	}

	public callback(form:Form, cancelled:boolean) : void
	{
		console.log("callback received, cancelled: "+cancelled);
		this.clearStack();
	}
}

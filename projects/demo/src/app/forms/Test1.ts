import { Block1 } from '../blocks/Block1';
import { Component } from '@angular/core';
import { CustomMenu } from '../menus/CustomMenu';
import { Form, INIT, SHOW } from 'forms42';


@Component({
    selector: 'test1',
    templateUrl: 'Test1.html',
    styleUrls: []
})


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
		this.Menu = new CustomMenu();
		this.setCallback(this.callback);
		this.Parameters.forEach((value,key) => {console.log(key+"="+value)});
	}


	@SHOW
	public show() : void
	{
		this.Title = "Test1 context title";
	}

	public callback(form:Form, cancelled:boolean) : void
	{
		//console.log("callback received, cancelled: "+cancelled);
		//this.clearCallStack();
	}
}

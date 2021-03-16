import { Component } from '@angular/core';
import { Form, INIT, SHOW, BLOCK } from 'forms42';
import { Employees } from '../blocks/Employees';
import { CustomMenu } from '../menus/CustomMenu';


@Component({
    selector: 'test1',
    templateUrl: 'Test1.html',
    styleUrls: []
})

@BLOCK("emp",Employees)

export class Test1 extends Form
{
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
	}

	public callback(form:Form, cancelled:boolean) : void
	{
		//console.log("callback received, cancelled: "+cancelled);
		//this.clearCallStack();
	}
}

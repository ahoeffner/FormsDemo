import { Component } from '@angular/core';
import { Countries } from '../blocks/Countries';
import { CustomMenu } from '../menus/CustomMenu';
import { Form, init, show, block } from 'forms42';


@Component({
    selector: 'test1',
    templateUrl: 'Test1.html',
    styleUrls: []
})

@block({component: Countries})

export class Test1 extends Form
{
  	@init
	public init() : void
	{
		this.Menu = new CustomMenu();
		this.setCallback(this.callback);
		this.Parameters.forEach((value,key) => {console.log(key+"="+value)});
	}


	@show
	public show() : void
	{
	}


	public callback(form:Form, cancelled:boolean) : void
	{
		//console.log("callback received, cancelled: "+cancelled);
		//this.clearCallStack();
	}
}

import { Component } from '@angular/core';
import { Countries } from '../blocks/Countries';
import { CustomMenu } from '../menus/CustomMenu';
import { Form, init, show, block, field, FieldType, Trigger } from 'forms42';
import { FieldTriggerEvent, SQLTriggerEvent, TriggerEvent } from 'forms42/lib/events/TriggerEvent';


@Component({
    selector: 'test1',
    templateUrl: 'Test1.html',
    styleUrls: []
})

//@block({component: Countries})
@field({name: "country.code", type: FieldType.integer})

export class Test1 extends Form
{
  	@init
	public init() : void
	{
		//this.Menu = new CustomMenu();
		this.setCallback(this.callback);
		this.Parameters.forEach((value,key) => {console.log(key+"="+value)});
		this.getBlock("Country").usage = {query: true, insert: true, update: true, delete: true};

		//this.addTrigger(this.trigger,Trigger.PreQuery);
		//this.addTrigger(this.trigger,Trigger.Lock);
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


	private async trigger(event:FieldTriggerEvent) : Promise<boolean>
	{
		return(false);
	}
}

import { Component } from '@angular/core';
import { CustomMenu } from '../menus/CustomMenu';
import { Form, init, Block, database, FieldDefinition, FieldType, FieldTriggerEvent, Trigger } from 'forms42';


@Component({
    templateUrl: 'ControlBlock.html',
    styleUrls: ['ControlBlock.css']
})

@database({insert: true, delete: true})

export class ControlBlock extends Form
{
	private countrycodes:Map<string,string> =
		new Map<string,string>();;


  	@init
	public async init()
	{
		// Set custom menu
		this.menu = new CustomMenu();

		// Create record in auto-generated block
		let ctrl:Block = this.getBlock("ctrl");
		let record:number = await ctrl.createControlRecord();

		// Set dropdown fieldtype
		let dddef:FieldDefinition = {name: "country.dropdown", type: FieldType.dropdown};
		ctrl.setFieldDefinition(dddef);

		// Set checkbox fieldtype
		let chkdef:FieldDefinition = {name: "country.checkbox", type: FieldType.checkbox};
		ctrl.setFieldDefinition(chkdef);

		// Set radio fieldtype
		let rddef:FieldDefinition = {name: "country.radio", type: FieldType.radio};
		ctrl.setFieldDefinition(rddef);

		// Set country realm
		this.countrycodes = new Map<string,string>();

		this.countrycodes.set("dk","denmark");
		this.countrycodes.set("no","norway");
		this.countrycodes.set("sw","sweden");

		ctrl.setPossibleValues("country.text",this.countrycodes,true);
		ctrl.setPossibleValues("country.dropdown",this.countrycodes,true);

		// Set default value
		ctrl.setValue(record,"country","dk");

		// Add triggers
		this.addFieldTrigger(this.search,Trigger.WhenValidateField,"search");
		this.addFieldTrigger(this.checkcountrycode,Trigger.WhenValidateField,"country");
	}


	public async search(event:FieldTriggerEvent) : Promise<boolean>
	{
		let value:string = event.value;

		if (value == null) value = "";
		this.alert("Search for '"+value+"'");

		return(true);
	}


	public async checkcountrycode(event:FieldTriggerEvent) : Promise<boolean>
	{
		let value:string = event.value;

		if (value == null) value = "";
		if (!this.countrycodes.has(value))
		{
			this.alert("Illegal value '"+value+"' for country code");
			this.getBlock(event.block).setValue(event.record,event.field,event.previous);
		}

		return(true);
	}
}

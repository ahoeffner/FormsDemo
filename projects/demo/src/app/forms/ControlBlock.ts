import { Component } from '@angular/core';
import { CustomMenu } from '../menus/CustomMenu';
import { Form, init, Block, database, FieldDefinition, FieldType } from 'forms42';


@Component({
    templateUrl: 'ControlBlock.html',
    styleUrls: ['ControlBlock.css']
})

@database({insert: true, delete: true})

export class ControlBlock extends Form
{
  	@init
	public async init()
	{
		this.menu = new CustomMenu();

		let country:Block = this.getBlock("country");
		let record:number = await country.createControlRecord();

		let dddef:FieldDefinition = {name: "country.dropdown", type: FieldType.dropdown};
		country.setFieldDefinition(dddef);

		country.setValue(record,"code",1);
		country.setValue(record,"country","denmark");

		let lov:Map<string,string> = new Map<string,string>();

		lov.set("dk","denmark");
		lov.set("no","norway");
		lov.set("sw","sweden");

		country.setPossibleValues("country.text",lov);
		country.setPossibleValues("country.dropdown",lov);
	}
}

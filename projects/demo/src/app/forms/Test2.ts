import { block, Form,  field, FieldType } from 'forms42';
import { Component } from '@angular/core';
import { Countries } from '../blocks/Countries';


@Component({
    selector: 'test2',
    templateUrl: 'Test2.html',
	styleUrls: []
})

@block({component: Countries})
//@field({name: "country.name.pwd", type: FieldType.password})

export class Test2 extends Form
{
}
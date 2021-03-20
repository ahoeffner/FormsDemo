import { block, Form } from 'forms42';
import { Component } from '@angular/core';
import { Countries } from '../blocks/Countries';


@Component({
    selector: 'test2',
    templateUrl: 'Test2.html',
	styleUrls: []
})

@block({component: Countries})

export class Test2 extends Form
{
}
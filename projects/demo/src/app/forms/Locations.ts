import { Form, block } from 'forms42';
import { Component } from '@angular/core';
import { Locations as location } from '../blocks/Locations';

@Component({
    selector: '',
    templateUrl: 'Locations.html',
    styleUrls: []
})

@block({component: location})

export class Locations extends Form
{

}
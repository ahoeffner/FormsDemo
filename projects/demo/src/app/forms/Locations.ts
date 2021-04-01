import { Form, block } from 'forms42';
import { Component } from '@angular/core';
import { Locations as location } from '../blocks/Locations';

@Component({
    selector: '',
    templateUrl: 'Locations.html',
    styleUrls: []
})

@block({component: location, alias: "loc"})

export class Locations extends Form
{

}
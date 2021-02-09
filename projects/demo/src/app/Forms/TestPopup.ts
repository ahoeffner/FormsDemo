import { Popup } from 'm42forms';
import { Component } from '@angular/core';


@Component({
    selector: 'test1',
    template:
    `
      Hello from Test1 {{n}} <button (click)="add()">Test1</button><br>
      <button (click)="close()">Close</button>
    `,
    styleUrls: []
})


export class TestPopup extends Popup
{
	public n:number = 1;

  	public getTitle() : string
  	{
    	return("Test Popup");
	}

	public getOffsetTop()
	{
		return(200);
	}

	public getOffsetLeft()
	{
		return(300);
	}

	public add()
	{
		this.n++;
	}
}
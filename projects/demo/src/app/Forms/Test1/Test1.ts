import { Component } from '@angular/core';

@Component({
    selector: 'test1',
    template:
    `
      Hello from Test1 {{n}} <button (click)="add()">Test1</button>
    `,
    styleUrls: []
  })


  export class Test1
  {
    public n:number = 1;

    public add()
    {
      this.n++;
    }
  }

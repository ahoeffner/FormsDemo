import { Component } from '@angular/core';

@Component({
    selector: 'test2',
    template:
    `
      Hello from Test2 VII {{n}} <button (click)="add()">Test1</button>
    `,
    styleUrls: []
  })


  export class Test2
  {
    public n:number = 1;

    public add()
    {
      this.n++;
    }
  }

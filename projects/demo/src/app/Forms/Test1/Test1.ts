import { Page } from 'm42forms';
import { Component } from '@angular/core';

@Component({
    selector: 'test1',
    template:
    `
      Hello from Test1 VII {{n}}<button (click)="add()">Test1</button>
    `,
    styleUrls: []
  })


  export class Test1 extends Page
  {
    public n:number = 1;

    public url(): string
    {
      return("test1");
    }

    public name(): string
    {
      return("Test1");
    }


    public add()
    {
      this.n++;
    }
  }

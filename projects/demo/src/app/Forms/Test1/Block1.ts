import { Block } from "m42forms";

export class Block1 extends Block
{
    public sayHello(arg:string): void
    {
        console.log("Hello "+arg);
    }
}
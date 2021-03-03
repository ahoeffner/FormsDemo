import { Block } from "forms42";

export class Block1 extends Block
{
    public sayHello(arg:string): void
    {
        console.log("Hello "+arg);
    }
}
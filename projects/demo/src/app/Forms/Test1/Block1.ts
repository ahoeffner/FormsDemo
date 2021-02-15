import { ControlBlock } from "m42forms";

export class Block1 extends ControlBlock
{
    public sayHello(arg:string): void
    {
        console.log("Hello "+arg);
    }
}
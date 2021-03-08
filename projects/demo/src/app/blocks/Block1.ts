import { DATABASE, Block, BLOCK } from "forms42";

@BLOCK("emp")
@DATABASE({query:true, insert:true})
export class Block1 extends Block
{
    public sayHello(arg:string): void
    {
        console.log("Hello "+arg);
    }
}
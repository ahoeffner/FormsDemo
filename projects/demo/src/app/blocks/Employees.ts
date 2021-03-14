import { DATABASE, BLOCK, FIELD, Block } from "forms42";

@BLOCK("emp")
@DATABASE({query:true, insert:false})

@FIELD("id","input")
@FIELD("name","input")
@FIELD("firstname","input")
@FIELD("lastname","input")
@FIELD("address","input")

export class Employees extends Block
{
}
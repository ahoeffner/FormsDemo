import { DATABASE, BLOCK, FIELD, Block } from "forms42";

@BLOCK("emp")
@DATABASE({query:false, insert:true, update: true, delete: true})

@FIELD("id","input")
@FIELD("job","input")
@FIELD("firstname","input")
@FIELD("lastname","input")

export class Employees extends Block
{
}
import { DATABASE, BLOCK, FIELD, Block } from "forms42";

@BLOCK("emp")
@DATABASE({query:false, insert:true, update: true, delete: true})

@FIELD({name: "id", type: "input"})
@FIELD({name: "job", type: "input"})
@FIELD({name: "firstname", type: "input"})
@FIELD({name: "lasttname", type: "input"})

export class Employees extends Block
{
}
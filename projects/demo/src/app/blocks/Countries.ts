import { database, alias, field, Block } from "forms42";

@alias("country")
@database({query:true, insert:true, update: true, delete: true})

@field({name: "code"    , type: "input"})
@field({name: "country" , type: "input"})

export class Countries extends Block
{
}
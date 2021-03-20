import { database, alias, field, Block, table, column } from "forms42";

@alias("country")
@table("countries")

@column("code","varchar")
@column("country","varchar")

@field({name: "code"    , type: "input", column: true, mandatory: true, case: "upper"})
@field({name: "country" , type: "input", column: "country", mandatory: true})

@database({query:false})
export class Countries extends Block
{
}
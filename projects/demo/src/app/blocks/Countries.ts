import { alias, Block, table, column, key, Case } from "forms42";


@alias("country")

@table({name: "countries", order: "country_id"})

@column({name: "country_id"  , type: "varchar", mandatory: true, case: Case.upper})
@column({name: "country_name", type: "varchar", mandatory: true})

@key("primary",true,"country_id")

export class Countries extends Block
{
}
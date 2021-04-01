import { Block, column, field, orderby, table } from "forms42";

@table("locations")
@orderby("country_id, city")

@column({name: "location_id"    , type: "varchar"})
@column({name: "street_address" , type: "varchar"})
@column({name: "postal_code"    , type: "varchar"})
@column({name: "city"           , type: "varchar"})
@column({name: "state_province" , type: "varchar"})
@column({name: "country_id"     , type: "varchar"})

@field({name: "country_name"})


export class Locations extends Block
{

}
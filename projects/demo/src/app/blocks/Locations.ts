import { Block, column, orderby, table } from "forms42";

@table("locations")
@orderby("country_id, city")

@column("locations_id","varchar")
@column("street_address","varchar")
@column("postal_code","varchar")
@column("city","varchar")
@column("state_province","varchar")
@column("country_id","varchar")


export class Locations extends Block
{

}
import { Block, column, field, FieldTriggerEvent, orderby, table, Trigger, Statement, Case } from "forms42";

@table("locations")
@orderby("country_id, city")

@column({name: "location_id"    , type: "smallint"  , mandatory: true})
@column({name: "street_address" , type: "varchar"   , mandatory: true})
@column({name: "postal_code"    , type: "varchar"   , mandatory: true})
@column({name: "city"           , type: "varchar"   , mandatory: true})
@column({name: "state_province" , type: "varchar"   , mandatory: true})
@column({name: "country_id"     , type: "varchar"   , mandatory: true})

@field({name: "country_name"})
@field({name: "country_id", case: Case.upper})
@field({name: "location_id", fieldoptions: {insert: false}})


export class Locations extends Block
{
    constructor()
    {
        super();
        this.addFieldTrigger(this.getCountry,Trigger.PostChange,"country_id")
    }

    public async getCountry(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        this.setValue("country_name",trigger.row,
        await this.execute(
            new Statement("select country_name from countries").
            where("country_id",trigger.value),true,true));
        return(true);
    }
}
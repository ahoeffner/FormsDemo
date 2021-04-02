import { Block, column, field, FieldTriggerEvent, table, Trigger, Statement, Case } from "forms42";

@table({name: "locations", order: "country_id, city"})

@column({name: "location_id"    , type: "number"    , mandatory: true})
@column({name: "street_address" , type: "varchar"   , mandatory: true})
@column({name: "postal_code"    , type: "varchar"   , mandatory: true})
@column({name: "city"           , type: "varchar"   , mandatory: true})
@column({name: "state_province" , type: "varchar"   , mandatory: true})
@column({name: "country_id"     , type: "varchar"   , mandatory: true, case: Case.upper})

@field({name: "location_id", fieldoptions: {insert: false, update: false}})
@field({name: "country_name", fieldoptions: {insert: false, update: false, query: false}})


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
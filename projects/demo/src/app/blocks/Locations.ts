import { Block, column, key, field, FieldTriggerEvent, table, Trigger, Statement, Case } from "forms42";

@table({name: "locations", order: "country_id, city"})

@column({name: "location_id"    , type: "number"    , mandatory: true})
@column({name: "street_address" , type: "varchar"   , mandatory: true})
@column({name: "postal_code"    , type: "varchar"   , mandatory: false})
@column({name: "city"           , type: "varchar"   , mandatory: true})
@column({name: "state_province" , type: "varchar"   , mandatory: false})
@column({name: "country_id"     , type: "varchar"   , mandatory: true, case: Case.upper})

@field({name: "location_id", fieldoptions: {insert: false, update: false}})
@field({name: "country_name", fieldoptions: {insert: false, update: false, query: false}})

@key("primary",true,"location_id")

export class Locations extends Block
{
    constructor()
    {
        super();
        this.addFieldTrigger(this.setCountry,Trigger.PostChange,"country_id")
    }

    public async setCountry(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        this.setValue(trigger.record,"country_name",
        await this.execute(
            new Statement("select country_name from countries").
            where("country_id",trigger.value),true,true));
        return(true);
    }
}
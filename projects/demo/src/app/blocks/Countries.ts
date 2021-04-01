import { database, alias, field, Block, table, column, key, orderby, FieldType, FieldTriggerEvent, FieldTrigger, Case } from "forms42";


@alias("country")
@table("countries")
@orderby("country_id")

@column({name: "country_id"  , type: "varchar"})
@column({name: "country_name", type: "varchar"})

@key("primary",true,"country_id")

@field({name: "code"    , column: "country_id", mandatory: true, case: Case.upper})
@field({name: "country" , column: "country_name", mandatory: true})


@database({query:true})
export class Countries extends Block
{
    constructor()
    {
        super();
        this.addFieldListener(this.setName,FieldTrigger.PostChange,["code","country"]);
    }


    public async setName(event:FieldTriggerEvent) : Promise<boolean>
    {
        let code:string = this.getValue("code",event.row);
        let country:string = this.getValue("country",event.row);

        if (code == null) code = "";
        if (country == null) country = "";

        this.setValue("name",event.row,country+" ("+code+")");
        return(true);
    }
}
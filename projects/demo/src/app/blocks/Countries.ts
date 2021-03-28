import { database, alias, field, Block, table, column, key, orderby, FieldTriggerEvent, FieldTrigger } from "forms42";


@alias("country")
@table("countries")
@orderby("country_id")

@column("country_id","varchar")
@column("country_name","varchar")

@key("primary",true,"country_id")

@field({name: "code"    , type: "input", column: "country_id", mandatory: true, case: "upper"})
@field({name: "country" , type: "input", column: "country_name", mandatory: true})

@field({name: "name" , type: "input"})


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
        console.log("PostChange "+event.field+" value: "+event.previous+" -> "+event.value);
        return(true);
    }
}
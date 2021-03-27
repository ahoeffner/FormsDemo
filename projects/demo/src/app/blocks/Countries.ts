import { database, alias, field, Block, table, column, key, KeyTriggerEvent, orderby } from "forms42";

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
        //this.addListener(this.trgtest1,"focus");
        //this.addListener(this.trgtest2,"focus");
    }

    public async trigger1(event:KeyTriggerEvent) : Promise<boolean>
    {
        return(true);
    }

    public trigger2(event:KeyTriggerEvent) : Promise<boolean>
    {
        return(new Promise<boolean>((data) => {return(true)}));
    }
}
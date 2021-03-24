import { database, alias, field, Block, table, column, key } from "forms42";

@alias("country")
@table("countries","code")

@column("country_id","varchar")
@column("country_name","varchar")

@key("primary",true,"country_id")

@field({name: "code"    , type: "input", column: "country_id", mandatory: true, case: "upper"})
@field({name: "country" , type: "input", column: "country_name", mandatory: true})

@database({query:true})
export class Countries extends Block
{
    constructor()
    {
        super();
        this.addListener(this.trgtest1,"focus");
        //this.addListener(this.trgtest2,"focus");
    }

    async trgtest1(field:string, row:number, type:string, value:any, key?:string) : Promise<boolean>
    {
        console.log("1 triggered on field: "+field+" row: "+row);
        return(true);
    }

    trgtest2(field:string, row:number, type:string, value:any, key?:string) : Promise<boolean>
    {
        return(new Promise<boolean>((data) => {return(true)}));
    }
}
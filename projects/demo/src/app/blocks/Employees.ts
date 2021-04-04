import { alias, Block, table, column, key, field, FieldTriggerEvent, Trigger } from "forms42";

@alias("emp")
@table({name: "employees", order: "first_name, last_name"})

@column({name: "employee_id"        , type: "integer"    , mandatory: true })
@column({name: "first_name"         , type: "varchar"    , mandatory: true })
@column({name: "last_name"          , type: "varchar"    , mandatory: true })
@column({name: "email"              , type: "varchar"    , mandatory: true })
@column({name: "phone_number"       , type: "varchar"    , mandatory: false})
@column({name: "hire_date"          , type: "date"       , mandatory: true })
@column({name: "job_id"             , type: "varchar"    , mandatory: true })
@column({name: "salary"             , type: "numeric"    , mandatory: false})
@column({name: "commission_pct"     , type: "numeric"    , mandatory: false})
@column({name: "manager_id"         , type: "integer"    , mandatory: false})
@column({name: "department_id"      , type: "smallint"   , mandatory: false})

@key("primary",true,"employee_id")

@field({name: "name", fieldoptions: {insert: false, update: false, query: false}})
@field({name: "manager", fieldoptions: {insert: false, update: false, query: false}})
@field({name: "department", fieldoptions: {insert: false, update: false, query: false}})


export class Employees extends Block
{
    constructor()
    {
        super();
        this.addFieldTrigger(this.setName,Trigger.PostChange,["first_name","last_name"]);
    }

    public async setName(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        let lname:string = this.getValue("last_name",trigger.row);
        let fname:string = this.getValue("first_name",trigger.row);

        this.setValue("name",trigger.row,fname+" "+lname);
        return(true);
    }
}
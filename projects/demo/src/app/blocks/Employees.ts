import { alias, Block, table, column, key, field, FieldTriggerEvent, Trigger, Statement } from "forms42";

@alias("emp")
@table({name: "employees", order: "department_id, first_name, last_name"})

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

        this.addFieldTrigger(this.setDepartment,Trigger.PostChange,"department_id");
        this.addFieldTrigger(this.setName,Trigger.PostChange,["first_name","last_name"]);
    }

    public async setName(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        let lname:string = this.getValue(trigger.record,"last_name");
        let fname:string = this.getValue(trigger.record,"first_name");

        this.setValue(trigger.record,"name",fname+" "+lname);
        return(true);
    }

    public async setDepartment(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        let stmt:Statement = new Statement("select department_name as name, manager_id as mgr from departments");

        stmt.where("department_id",trigger.value);
        let row:any = await this.execute(stmt,true);

        if (row != null)
        {
            let mgr:number = row["mgr"];
            let dept:string = row["name"];

            this.setValue(trigger.record,"department",dept);

            stmt = new Statement("select first_name||' '||last_name from employees");
            stmt.where("employee_id",mgr);

            let manager:string = await this.execute(stmt,true,true);
            this.setValue(trigger.record,"manager",manager);
        }

        return(true);
    }
}
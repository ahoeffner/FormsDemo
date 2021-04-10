import { alias, Block, table, column, key, field, FieldTriggerEvent, Trigger, Statement, Column, Case, ListOfValues, trigger, listofvalues } from "forms42";

@alias("emp")
@table({name: "employees", order: "department_id, first_name, last_name"})

@column({name: "employee_id"        , type: Column.integer    , mandatory: true })
@column({name: "first_name"         , type: Column.varchar    , mandatory: true })
@column({name: "last_name"          , type: Column.varchar    , mandatory: true })
@column({name: "email"              , type: Column.varchar    , mandatory: true })
@column({name: "phone_number"       , type: Column.varchar    , mandatory: false})
@column({name: "hire_date"          , type: Column.date       , mandatory: true })
@column({name: "job_id"             , type: Column.varchar    , mandatory: true })
@column({name: "salary"             , type: Column.decimal    , mandatory: false})
@column({name: "commission_pct"     , type: Column.decimal    , mandatory: false})
@column({name: "manager_id"         , type: Column.integer    , mandatory: false})
@column({name: "department_id"      , type: Column.integer    , mandatory: false})

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

    @listofvalues("department_id")
    public departments(record:number) : ListOfValues
    {
        let lov:ListOfValues =
        {
            minlen: 0,
            postfix: "%",

            title: "Departments block",

            sql: `  select department_id, department_name
                    from departments
                    where lower(department_name) like lower(:filter)
                    order by 2`,

            case: Case.lower,
            fieldmap: new Map<string,string>()
        }

        return(lov);
    }


    public async setName(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        let lname:string = this.getValue(trigger.record,"last_name");
        let fname:string = this.getValue(trigger.record,"first_name");

        this.setValue(trigger.record,"name",fname+" "+lname);
        return(true);
    }


    @trigger(Trigger.WhenValidateField,"hire_date")
    public async validate(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        console.log("block validate "+trigger.field);
        return(true);
    }


    public async setDepartment(trigger:FieldTriggerEvent) : Promise<boolean>
    {
        let stmt:Statement = new Statement(

            `select department_name as dept, first_name||' '||last_name as manager
             from departments dept, employees emp
             where emp.department_id = dept.department_id
             and dept.department_id = :deptid`

        )
        .bind("deptid",trigger.value);

        let row:any = await this.execute(stmt,true);

        if (row != null)
        {
            let dept:string = row["dept"];
            let manager:string = row["manager"];

            this.setValue(trigger.record,"department",dept);
            this.setValue(trigger.record,"manager",manager);
        }

        return(true);
    }
}
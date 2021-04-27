import { alias, Block, table, column, key, field, FieldTriggerEvent, Trigger, Statement, Column, trigger, Condition, SQLTriggerEvent } from "forms42";

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
@key("departments",false,"department_id")


@field({name: "manager", fieldoptions: {insert: false, update: false, query: false}})
@field({name: "employee", fieldoptions: {insert: false, update: false, query: true}})
@field({name: "department", fieldoptions: {insert: false, update: false, query: false}})


export class Employees extends Block
{
    @trigger(Trigger.PostChange,["first_name","last_name"])
    public async setName(event:FieldTriggerEvent) : Promise<boolean>
    {
        let lname:string = this.getValue(event.record,"last_name");
        let fname:string = this.getValue(event.record,"first_name");

        this.setValue(event.record,"employee",fname+" "+lname);
        return(true);
    }


    @trigger(Trigger.PostChange,"department_id")
    public async setDepartment(event:FieldTriggerEvent) : Promise<boolean>
    {
        let deptid:number = +event.value;

        let stmt:Statement = new Statement(

            `select department_name as dept, first_name||' '||last_name as manager
             from departments dept, employees emp
             where emp.department_id = dept.department_id
             and dept.department_id = :deptid`

        )
        .bind("deptid",deptid);

        let row:any = await this.execute(stmt,true);

        if (row != null)
        {
            let dept:string = row["dept"];
            let manager:string = row["manager"];

            this.setValue(event.record,"department",dept);
            this.setValue(event.record,"manager",manager);
        }

        return(true);
    }


    @trigger(Trigger.WhenValidateField,"salary")
    public async validateSalary(event:FieldTriggerEvent) : Promise<boolean>
    {
        if (event.value == null)
            return(true);

        await this.getSalaryLimits();

        let stmt:Statement = new Statement(

            `select count(manager_id)
             from employees emp
             where manager_id = :empid`

        )
        .bind("empid",this.getValue(event.record,"employee_id"));

        let depts:number = await this.execute(stmt,true,true);
        let limit:number = depts > 0 ? this.mgrlimit : this.emplimit;

        if (+event.value < 0 || +event.value > +limit)
        {
            this.alert("Salary must be in range 0 - "+limit,"Validation failed");
            return(false);
        }

        return(true);
    }


    @trigger(Trigger.PreQuery)
    public async prequery(event:SQLTriggerEvent) : Promise<boolean>
    {
        let text:string = null;

        this.searchfilter.forEach((pair) =>
        {
            if (pair.name == "employee")
                text = pair.value;
        });

        // employee is not a database column, so just add
        if (text != null && text.trim().length > 0)
        {
            event.stmt.whand("employee",text,Column.varchar);
            let cond:Condition = event.stmt.getCondition().last();
            cond.setCondition("(to_tsvector('danish',first_name||' '||last_name) @@ websearch_to_tsquery('danish',:"+cond.placeholder+"))");
        }

        return(true);
    }


    private emplimit:number = null;
    private mgrlimit:number = null;

    public async getSalaryLimits() : Promise<number[]>
    {
        if (this.mgrlimit != null)
            return([this.mgrlimit,this.emplimit]);

        let stmt:Statement = new Statement
        (":max = salaryLimit('employee')").returnvalue("max",Column.integer);
        this.emplimit = await this.execute(stmt,true,true);

        stmt = new Statement
        (":max = salaryLimit('manager')").returnvalue("max",Column.integer);
        this.mgrlimit = await this.execute(stmt,true,true);

        return([this.mgrlimit,this.emplimit]);
    }


    public clearSalaryLimits() : void
    {
        this.mgrlimit = null;
        this.emplimit = null;
    }
}
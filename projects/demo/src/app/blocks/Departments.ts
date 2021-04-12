import { alias, Block, table, column, key, Column, trigger, Trigger, FieldTriggerEvent, Statement, field } from "forms42";


@alias("dept")
@table({name: "departments", order: "department_name"})

@column({name: "department_id"      , type: Column.integer, mandatory: true})
@column({name: "department_name"    , type: Column.varchar, mandatory: true})
@column({name: "manager_id"         , type: Column.integer, mandatory: false})
@column({name: "location_id"        , type: Column.integer, mandatory: false})

@key("primary",true,"department_id")
@key("locations",true,"location_id")

@field({name: "manager", fieldoptions: {navigable: false}})


export class Departments extends Block
{
    @trigger(Trigger.PostChange,"manager_id")
    public async getManager(event:FieldTriggerEvent) : Promise<boolean>
    {
        if (event.value == null) return(true);
        if (event.value.trim().length == 0) return(true);

        let stmt:Statement = new Statement(

            `select first_name||' '||last_name as manager
             from employees emp
             where emp.manager_id = :mgrid`
        )
        .bind("mgrid",event.value);

        let manager:string = await this.execute(stmt,true,true);
        this.setValue(event.record,"manager",manager);

        return(true);
    }
}
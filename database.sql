create or replace function salaryLimit(job varchar) returns integer as $$
begin
    if (job like 'employee')
    then
        return(35000);
    end if;

    if (job like 'manager')
    then
        return(50000);
    end if;

    return(0);
end;
$$ language plpgsql;


select salaryLimit('manager') as sal


drop index emp_txt_idx;
create index emp_txt_idx on employees using gin (to_tsvector('danish',first_name||' '||last_name||' '||email||' '||replace(phone_number,'.',' ')||' '||job_id));

select to_tsvector('danish',first_name||' '||last_name||' '||email||' '||replace(phone_number,'.',' ')||' '||job_id)
from employees

explain select * from employees
where to_tsvector('danish',first_name||' '||last_name||' '||email||' '||replace(phone_number,'.',' ')||' '||job_id) @@ to_tsquery('danish','haan');

select employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id
from employees
where (to_tsvector('danish',first_name||' '||last_name||' '||email||' '||replace(phone_number,'.',' ')||' '||job_id) @@ websearch_to_tsquery('danish','515'))
order by department_id, first_name, last_name;


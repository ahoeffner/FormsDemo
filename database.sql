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
create index emp_txt_idx on employees using gin (to_tsvector('danish',first_name||' '||last_name));

explain select * from employees
where to_tsvector('danish',first_name||' '||last_name) @@ to_tsquery('danish','haan');

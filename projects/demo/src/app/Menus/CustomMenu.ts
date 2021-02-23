import { Menu, Form, MenuEntry, MenuHandler } from 'm42forms';


export class CustomMenu implements Menu
{
    private handler:Handler = new Handler();

    getHandler(): MenuHandler
    {
        return(this.handler);
    }

    getEntries(): MenuEntry[]
    {
        let entries: MenuEntry[] =
        [
            {
                name: "Custom", options:
                [
                    {name: "Test1", action: "test1"},
                    {name: "Test2", action: "test2"},
                ]
            }
        ];

        return(entries);
    }
}


class Handler extends MenuHandler
{
    public form:Form;

    private enable() : void
    {
        if (this.ready && this.form != null)
        {
            this.menu.enable();
        }
    }

    public activate(): void
    {
        this.enable();
    }

    public setForm(form: Form): void
    {
        this.form = form;
        this.enable();
    }

    public test1() : void
    {
        console.log("test1");
    }

    public test2() : void
    {
        console.log("test2");
    }
}
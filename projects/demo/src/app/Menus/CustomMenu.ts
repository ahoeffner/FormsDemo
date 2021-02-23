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
    public onInit(): void
    {
    }

    public onFormChange(form: Form): void
    {
        if (form != null) this.enable();
        else              this.disable();
    }

    public test1() : void
    {
        console.log("test1");
    }

    public test2() : void
    {
        console.log("test2");
    }

    public  onConnect(): void
    {
        console.log("CustomMenu onConnect");
    }

    public onDisconnect(): void
    {
        console.log("CustomMenu onDisconnect");
    }
}
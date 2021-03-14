import { Menu, Form, MenuEntry, MenuHandler, Transaction } from 'forms42';


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
                    {name: "Test2", action: "test2"},
                    {name: "Test3", action: "test3"},
                ]
            }
        ];

        return(entries);
    }
}


class Handler extends MenuHandler
{
    public onTransactio(action: Transaction): void
    {
        throw new Error('Method not implemented.');
    }


    public onInit(): void
    {
    }

    public onFormChange(form: Form): void
    {
        if (form != null) this.enable();
        else              this.disable();
    }

    public test2() : void
    {
        this.app.showform("test2");
    }

    public test3() : void
    {
        this.app.showform("test3");
    }

    public  onConnect(): void
    {
    }

    public onDisconnect(): void
    {
    }
}
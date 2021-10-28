import { Menu, Form, MenuEntry, MenuHandler } from 'forms42';


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
                name: "Forms", options:
                [
                    {name: "Locations", action: "Locations"},
                    {name: "Country codes", action: "CountryCodes"},
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
        this.enable();
    }

    public onTransactionChange(): void
    {
    }

    public Locations() : void
    {
        this.app.showform("LocDeptEmp");
    }

    public CountryCodes() : void
    {
        this.app.showform("Countries");
    }

    public  onConnect(): void
    {
    }

    public onDisconnect(): void
    {
    }
}
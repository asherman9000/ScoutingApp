class pane {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }

    public makePane(id: HTMLElement) : void {
        id.innerHTML = "class='div red'";
    }
}
let id = document.getElementById("id")!;

let p = new pane("hi");
p.makePane(id);


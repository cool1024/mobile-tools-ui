
declare const window: any;
export interface PageController {
    onInit(): void;
    fillView(): void;
}

export class PageServiceController implements PageController {
    onInit() { }
    fillView() { }
}

export class Page {

    constructor() {

    }

    static create(ctr: PageController) {
        window.Page = ctr;
        window.PageHandle = () => {
            ctr.onInit();
        }
    }

    static createAndInit(ctr: PageController) {
        window.Page = ctr;
        ctr.onInit();
    }
}
export class TemplateAnaylse {

    private components: Component[];

    addComponents(components: Component[]) {
        components.forEach(component => this.addComponent(component));
    }

    addComponent(component: Component) {
        this.components.push(component);
    }

    analyse(templateStr: string): string {
        return templateStr;
    }
}
export class Component {

    selector: string;

    template: string;
}

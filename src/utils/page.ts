
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

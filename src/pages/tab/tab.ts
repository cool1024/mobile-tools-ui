import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';

declare const $: any;

class TabController extends PageServiceController {

    onInit() {

    }

    fillView() {

    }
}
Page.createAndInit(new TabController);   

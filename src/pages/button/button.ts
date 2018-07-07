import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';

declare const $: any;

class ButtonController extends PageServiceController {

    onInit() {

    }

    fillView() {

    }
}
Page.createAndInit(new ButtonController);   

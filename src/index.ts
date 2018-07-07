import { Page, PageServiceController } from './utils/page';
import './style.scss';

declare const $: any;

class IndexController extends PageServiceController {

    onInit() {

    }

    fillView() {

    }
}
Page.create(new IndexController);   

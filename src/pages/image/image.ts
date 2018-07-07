import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';

declare const $: any;

class ImageController extends PageServiceController {

    onInit() {

    }

    fillView() {

    }
}
Page.createAndInit(new ImageController);   

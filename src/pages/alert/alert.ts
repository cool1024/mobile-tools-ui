import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';

declare const $: any;

class AlertController extends PageServiceController {

    onInit() {
        $('[target="alert-open"]').click(() => {
            $('.alert').addClass('active');
        });
        $('[target="alert-close"]').click(() => {
            $('.alert').removeClass('active');
        });
    }

    fillView() {

    }
}
Page.createAndInit(new AlertController);   

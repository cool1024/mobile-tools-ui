import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';

declare const $: any;

class PopupController extends PageServiceController {

    onInit() {
        $('[target="default"]').click(() => {
            $('#default').show();
        });
        $('[target="full"]').click(() => {
            $('#full').show();
        });
        $('[target="close"]').click(() => {
            $('.popup').hide();
        });
    }

    fillView() {

    }
}
Page.createAndInit(new PopupController);   

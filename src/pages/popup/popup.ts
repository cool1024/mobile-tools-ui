import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';

declare const $: any;

class PopupController extends PageServiceController {

    onInit() {
        $('[target="default"]').click(() => {
            $('#default').show();
            $('.popup-default').show();
        });
        $('[target="full"]').click(() => {
            $('.popup-full').show();
        });
        $('[target="sheet"]').click(() => {
            $('.popup-sheet').show();
        });
        $('.popup-sheet').click(() => {
            $('.popup-sheet').hide();
        });
        $('[target="close"]').click(() => {
            $('.popup').hide();
        });
    }

    fillView() {

    }
}
Page.createAndInit(new PopupController);   

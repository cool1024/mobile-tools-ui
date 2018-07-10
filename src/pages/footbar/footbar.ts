import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';

declare const $: any;

class FootbarController extends PageServiceController {

    onInit() {
        $(`[target='gray-coloful']`).click(() => {
            $('#gray-colorful').show();
            $('#gray-color').hide();
        });
        $(`[target='gray-color']`).click(() => {
            $('#gray-colorful').hide();
            $('#gray-color').show();
        });
        $('.bar-item').click($event => {
            const btns: HTMLButtonElement[] = $('.bar-item').toArray();
            btns.forEach(btn => {
                btn.classList.remove('active');
            });
            const btn: HTMLButtonElement = $event.currentTarget;
            if (!btn.classList.contains('active')) {
                btn.className += ' active';
            }
        });
        $('#gray-color').hide();
    }

    fillView() {
    }
}
Page.createAndInit(new FootbarController);   

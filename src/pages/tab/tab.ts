import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';

declare const $: any;

class TabController extends PageServiceController {

    onInit() {
        $('.tab-item').click($event => {
            const items: HTMLDivElement[] = $('.tab-item').toArray();
            items.forEach(div => {
                div.classList.remove('active');
            });
            const div: HTMLDivElement = $event.currentTarget;
            if (!div.classList.contains('active')) {
                div.className += ' active';
            }
        });
    }

    fillView() {

    }
}
Page.createAndInit(new TabController);   

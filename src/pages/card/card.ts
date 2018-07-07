import { Page, PageServiceController } from './../../utils/page';
import './../../style.scss';
import { Card } from './card.interface';

declare const $: any;

class CardController extends PageServiceController {

    cardList: Card[];

    onInit() {
        this.cardList = [
            { cardImage: 'source/images/thumb/card-amsterdam.png', cardTitle: 'Nine Inch Nails Live', cardSubject: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.' },
            { cardImage: 'source/images/thumb/card-madison.png', cardTitle: 'Erykah Badu', cardSubject: 'American singer-songwriter, record producer, activist, and actress, Badus style is a prime example of neo-soul.' },
            { cardImage: 'source/images/thumb/card-portland.png', cardTitle: 'Queen', cardSubject: 'The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.' },
        ];
        this.fillView();
    }

    getCardMediaStr(card: Card): string {
        return `
        <div class="card card-media mb-2">
            <img class="card-media-thumb" src="${card.cardImage}">
            <div class="card-media-content">
                <h4 class="text-truncate">${card.cardTitle}</h4>
                <div class="text-gray text-truncate">${card.cardSubject}</div>
                <div class="text-muted">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-time"></use>
                    </svg>
                    <span>2018-07-07</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-address"></use>
                    </svg>
                    <span>Unknow</span>
                </div>
            </div>
        </div>`;
    }

    getCardImageStr(card: Card): string {
        return `
        <div class="card mt-2">
            <img class="w-100" src="${card.cardImage}">
            <div class="card-block">
                <h4>${card.cardTitle}</h4>
                <div class="text-gray">${card.cardSubject}</div>
                <div class="flex-around">
                    <button class="btn-text text-danger" type="button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bangbangtang"></use>
                        </svg>
                        <span>Favorite</span>
                    </button>
                    <button class="btn-text text-warning" type="button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-ningmeng"></use>
                        </svg>
                        <span>Listen</span>
                    </button>
                    <button class="btn-text text-success" type="button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-qingpingguo"></use>
                        </svg>
                        <span>Share</span>
                    </button>
                </div>
            </div>
        </div>
        `
    }

    fillView() {
        let cardMediaHtmlStr = '';
        let cardImageHtmlStr = '';
        this.cardList.forEach(card => {
            cardMediaHtmlStr += this.getCardMediaStr(card);
            cardImageHtmlStr += this.getCardImageStr(card);
        });
        $('#card-media-pad').html(cardMediaHtmlStr);
        $('#card-image-pad').html(cardImageHtmlStr);
    }
}
Page.createAndInit(new CardController);   

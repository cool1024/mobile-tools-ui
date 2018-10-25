/**
 * 请编写页面文件说明
 *
 * @author 填写作者
 * @file   home.component.ts
 * @date   2018-10-25 16:55:57
 */
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    cards = [
        {
            cardImage: 'assets/images/thumb/card-amsterdam.png',
            cardTitle: 'Nine Inch Nails Live',
            cardSubject: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.'
        },
        {
            cardImage: 'assets/images/thumb/card-madison.png',
            cardTitle: 'Erykah Badu',
            cardSubject: 'American singer-songwriter, record producer, activist, and actress, Badus style is a prime example of neo-soul.'
        },
        {
            cardImage: 'assets/images/thumb/card-portland.png',
            cardTitle: 'Queen',
            cardSubject: 'The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in...'
        }
    ];

    constructor() { }

    ngOnInit() {

    }
}

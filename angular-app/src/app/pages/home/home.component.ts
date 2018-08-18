import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { AudioService } from '../../audio.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // 推荐歌单
    recommands = new Array<any>();

    // 动态消息
    events = new Array<any>();

    // 电台推荐
    programs = new Array<any>();

    constructor(
        private request: RequestService,
    ) { }

    ngOnInit() {
        this.request.send('/personalized', {}).subscribe(res => {
            this.recommands = res.result;
        });
        this.request.send('/user/detail', { uid: 108651695 }).subscribe(res => {
            localStorage.setItem('user', JSON.stringify(res));
        });
        this.request.send('/event', {}).subscribe(res => {
            this.events = res.event;
            this.events = this.events.map(event => {
                event.json = JSON.parse(event.json);
                return event;
            });
        });
        this.request.send('/personalized/djprogram', {}).subscribe(res => {
            this.programs = res.result;
            console.log(this.programs);
        });
    }

}

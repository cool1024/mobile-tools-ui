import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // 推荐歌单
    recommands = new Array<any>();

    constructor(private request: RequestService) { }

    ngOnInit() {
        this.request.send('/personalized', {}).subscribe(res => {
            this.recommands = res.result;
        });
        this.request.send('/user/detail', { uid: 108651695 }).subscribe(res => {
            localStorage.setItem('user', JSON.stringify(res));
        });
    }

}

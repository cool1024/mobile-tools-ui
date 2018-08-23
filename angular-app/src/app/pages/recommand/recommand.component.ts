import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { AudioService } from '../../audio.service';

@Component({
    selector: 'app-recommand',
    templateUrl: './recommand.component.html',
    styleUrls: ['./recommand.component.scss']
})
export class RecommandComponent implements OnInit {

    // 推荐列表
    recommends = new Array<any>();

    // 用户信息
    user: any;

    constructor(private request: RequestService, private audio: AudioService) { }

    ngOnInit() {
        this.request.send('/recommend/songs', {}).subscribe(res => {
            this.recommends = res.recommend;
        });
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        this.user = user.profile;
    }

    /**
     * 播放音乐
     */
    playMusic(index: number) {
        this.audio.playList = this.recommends.map(recommend => {
            return { id: recommend.id, ar: recommend.artists, name: recommend.name, picUrl: recommend.album.picUrl };
        });
        this.audio.playMusic(index);
    }

}

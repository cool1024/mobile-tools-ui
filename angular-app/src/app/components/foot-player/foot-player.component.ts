import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AudioService } from '../../audio.service';

@Component({
    selector: 'app-foot-player',
    templateUrl: './foot-player.component.html',
    styleUrls: ['./foot-player.component.scss']
})
export class FootPlayerComponent implements OnInit {

    // 是否显示播放列表
    showPlayList = false;

    // get activeMusic() {
    //     this.audio.activeMusicIndex
    // }

    constructor(public audio: AudioService) {
        // this.http.get('assets/plays.json').subscribe(res => {
        //     console.log(res);
        //     localStorage.setItem('plays', JSON.stringify(res));
        this.audio.playList = JSON.parse(localStorage.getItem('plays') || '[]');
        // this.plays = JSON.parse(localStorage.getItem('plays') || '[]');
        // });
    }

    ngOnInit() {
        this.audio.init();
    }

}

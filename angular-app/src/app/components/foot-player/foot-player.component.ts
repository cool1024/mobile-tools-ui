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

    get activeMusic() {
        if (this.audio.activeMusicIndex >= 0) {
            if (this.audio.playList[this.audio.activeMusicIndex]) {
                return {
                    name: this.audio.playList[this.audio.activeMusicIndex].name,
                    picUrl: this.audio.playList[this.audio.activeMusicIndex].picUrl
                };
            } else {
                return {
                    picUrl: 'http://p1.music.126.net/_1HDZcJ-wDEtwkZ1cYqRbA==/3254554427603674.jpg',
                    name: '歌曲名称'
                };
            }
        } else {
            return {
                picUrl: 'http://p1.music.126.net/_1HDZcJ-wDEtwkZ1cYqRbA==/3254554427603674.jpg',
                name: '歌曲名称'
            };
        }
    }

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

    playMusic() {
        if (this.activeMusic.name !== '歌曲名称') {
            this.audio.setPlay();
        }
    }
}

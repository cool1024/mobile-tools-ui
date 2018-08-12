/**
 * 音乐播放服务
 * @file audio.service.ts
 * @author xiaojian
 * @date 2018年06月12日
 */
import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable()
export class AudioService {

    audio: HTMLAudioElement;

    playStatus = 'load'; // load,ready,play,pause,error

    playList = new Array<any>();

    activeMusicIndex = 0;

    constructor(private request: RequestService) { }

    init() {
        this.audio = new Audio();
    }

    initMusic(src: string) {
        this.audio.src = src;
        this.audio.oncanplay = () => {
            this.playStatus = 'ready';
            this.setPlay();
        };

        this.audio.onerror = () => {
            this.playStatus = 'error';
        };

        this.audio.onended = () => {
            this.setNext();
        };
    }

    setPlay() {
        this.playStatus = 'play';
        this.audio.play();
    }

    setPause() {
        this.playStatus = 'pause';
        this.audio.pause();
    }

    setNext() {
        this.setPause();
        (this.playList.length - 1 > this.activeMusicIndex) ? this.activeMusicIndex++ : this.activeMusicIndex = 0;
        localStorage.setItem('activeMusicIndex', this.activeMusicIndex.toString());
        this.loadMusic(this.playList[this.activeMusicIndex].id);
    }

    setPre() {
        this.setPause();
        this.activeMusicIndex > 0 ? this.activeMusicIndex-- : this.activeMusicIndex = this.playList.length - 1;
        localStorage.setItem('activeMusicIndex', this.activeMusicIndex.toString());
        this.loadMusic(this.playList[this.activeMusicIndex].id);
    }

    loadMusic(ids) {
        this.initMusic(`http://music.163.com/song/media/outer/url?id=${ids}.mp3`);
        // this.request.send('/song/detail?timestamp=' + new Date().getTime(), { ids }).subscribe(res => {
        //     initAudio(`http://music.163.com/song/media/outer/url?id=${ids}.mp3`);
        // });
    }

    playMusic(index = -1) {
        if (index !== -1) {
            this.activeMusicIndex = index;
        }
        this.loadMusic(this.playList[this.activeMusicIndex].id);
    }
}

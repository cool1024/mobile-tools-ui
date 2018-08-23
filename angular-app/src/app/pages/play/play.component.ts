import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AudioService } from '../../audio.service';

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.scss']
})
export class PlayComponent {

    constructor(private activeRoute: ActivatedRoute, public audio: AudioService) {
        this.activeRoute.paramMap.subscribe(params => {
            console.log(params.get('id'));
            this.audio.hidden = true;
        });
    }

    get backgroundStyle() {
        return {
            backgroundImage: `url(${this.audio.activeMusic.picUrl})`
        };
    }

    get needleStyle() {
        return {
            transform: `rotateZ(${this.audio.playStatus === 'play' ? 0 : '-30'}deg)`
        };
    }
}

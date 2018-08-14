import { Component } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public audio: AudioService) { }
}

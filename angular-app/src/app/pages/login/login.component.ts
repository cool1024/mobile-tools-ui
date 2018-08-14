import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';
import { Router } from '@angular/router';
import { AudioService } from '../../audio.service';

declare const md5: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private request: RequestService,
        private router: Router,
        private audio: AudioService
    ) { }

    ngOnInit() {
        if (localStorage.getItem('cookie')) {
            this.audio.hidden = true;
            this.router.navigateByUrl('/home');
        } else {
            this.audio.hidden = true;
        }
    }

    confirmLogin(params: any) {
        params.password = md5(params.password);
        this.request.send('/login', params).subscribe(res => {
            localStorage.setItem('account', JSON.stringify(res.account));
            localStorage.setItem('profile', JSON.stringify(res.profile));
            localStorage.setItem('cookie', JSON.stringify(res.cookie));
            this.audio.hidden = false;
            this.router.navigateByUrl('/home');
        });
    }

}

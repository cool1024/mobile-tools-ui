/**
 * 请求服务，所有的http请求和其他请求都必须使用此服务提供的方法
 * @file request.service.ts
 * @author xiaojian
 * @date 2018年06月12日
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, Subject, interval } from 'rxjs';
import { skipWhile, skip } from 'rxjs/operators';

@Injectable()
export class RequestService {

    serverUrl = 'http://www.cool1024.com:3000';

    constructor(
        private http: HttpClient,
    ) { }

    /**
     * 发送一个请求
     *
     * @param {string} url 请求地址
     * @return {Observable<any>}
     */
    send(url: string, params: any): Observable<any> {
        let cookie: any = localStorage.getItem('cookie');
        cookie = (cookie && JSON.parse(cookie)) || [];
        cookie.forEach(function (str, index) {
            cookie[index] = str.split(';')[0];
        });
        cookie = cookie.join(';');
        return this.http.post(this.serverUrl + url, Object.assign({ cookie }, params))
            .pipe(skipWhile(res => res.code !== 200));
    }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, declarationsComponents } from './app.routing';
import { RequestService } from './request.service';
import { AudioService } from './audio.service';

@NgModule({
    declarations: [
        AppComponent,
        declarationsComponents,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [RequestService, AudioService],
    bootstrap: [AppComponent]
})
export class AppModule { }

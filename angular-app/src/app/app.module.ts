import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, declarationsComponents } from './app.routing';
import { RequestService } from './request.service';
import { RecommandComponent } from './pages/recommand/recommand.component';
import { AudioService } from './audio.service';

@NgModule({
    declarations: [
        AppComponent,
        declarationsComponents,
        RecommandComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [RequestService, AudioService],
    bootstrap: [AppComponent]
})
export class AppModule { }

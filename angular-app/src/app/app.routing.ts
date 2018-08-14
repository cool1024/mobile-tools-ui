/**
 * App路由模块
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootPlayerComponent } from './components/foot-player/foot-player.component';
import { TabComponent } from './components/tab/tab.component';
import { TabDirective, TabsDirective } from './components/tab/tab.directive';

/**
 * 页面
 */
import { HomeComponent } from './pages/home/home.component';
import { RecommandComponent } from './pages/recommand/recommand.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

    // 此处设置网站首页
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'recommand', component: RecommandComponent },

    // 最后全局匹配其他链接
    // { path: '**', redirectTo: 'dashboard/error', pathMatch: 'full' },
];

const components = [
    FootPlayerComponent,
    TabComponent,
    TabDirective,
    TabsDirective,
];

const pages = [
    LoginComponent,
    HomeComponent,
    RecommandComponent,
];

export const declarationsComponents = [...components, ...pages];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            useHash: false
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

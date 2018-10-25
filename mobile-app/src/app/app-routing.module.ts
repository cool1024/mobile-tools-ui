/**
 * App路由模块
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPageComponent } from './base-pages/tab-page/tab-page.component';

const routes: Routes = [

    // 此处设置网站首页
    { path: '', redirectTo: 'tab/demo/home', pathMatch: 'full' },

    {
        path: 'tab', component: TabPageComponent, children: [
            { path: 'demo', loadChildren: './modules/demo/demo.module#DemoModule' },
        ]
    }

    // 最后全局匹配其他链接
    // { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

export const declarations = [
    TabPageComponent,
];

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

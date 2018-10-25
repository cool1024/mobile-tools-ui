/**
 * 请编写路由文件说明
 *
 * @author 填写作者
 * @file   demo.routing.ts
 * @date   2018-10-25 16:55:57
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
];

/**
 * 指令、组件、管道声明
 */
export const declarationComponents = [
    HomeComponent
];

/**
 * 动态组件（模态框，窗口）
 */
export const entryComponents = [];

/**
 * 服务列表
 */
export const providers = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule { }

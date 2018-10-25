/**
 * 请编写模块文件说明
 *
 * @author 填写作者
 * @file   demo.module.ts
 * @date   2018-10-25 16:55:57
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoRoutingModule, declarationComponents, entryComponents, providers } from './demo.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // 这里可以导入更多的UI组件--请删除注释
        // ----------------------请删除注释
        // ----------------------请删除注释
        // ----------------------请删除注释
        // ----------------------请删除注释
        // ----------------------请删除注释
        // ----------------------请删除注释
        // 这里可以导入更多的UI组件--请删除注释
        DemoRoutingModule,
    ],
    declarations: [declarationComponents],
    entryComponents: [entryComponents],
    providers: [providers]
})
export class DemoModule { }

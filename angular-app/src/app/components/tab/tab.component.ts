import {
    Component,
    EventEmitter,
    Input,
    Output,
    AfterViewInit,
    ViewChildren,
    QueryList,
    ElementRef,
} from '@angular/core';
import { TabsDirective } from './tab.directive';

@Component({
    selector: 'app-tabs',
    template: `
    <div class="tabs tabs-{{color}}">
        <div class="tab-bar" [style.width.px]="tabBarWidth" [style.left.px]="offsetLeft"></div>
        <div #tabItem *ngFor="let tab of tabs;index as i"
            [class.active]="tab===activeTab"
            (click)="changeTab(tab,i)"
            class="tab">
            {{tab}}
        </div>
    </div>`
})
export class TabComponent implements AfterViewInit {

    @Input() tabs: Array<string>;

    @Input() activeTab: string;

    @Input() color: string;

    @Input() target: TabsDirective;

    @Output() tabChange = new EventEmitter<string>();

    @ViewChildren('tabItem') tabItems: QueryList<ElementRef>;

    tabBarWidth = 0;

    offsetLeft = 0;

    get tabDoms(): HTMLDivElement[] {
        return this.tabItems.toArray().map(item => item.nativeElement);
    }

    moveHandle = () => {
        const activeIndex = this.tabs.indexOf(this.activeTab);
        this.moveActiveBar(activeIndex);
    };

    constructor() { }

    ngAfterViewInit() {
        if (this.target) {
            this.target.changeTab(this.activeTab || null);
        }
        const activeIndex = this.tabs.indexOf(this.activeTab);
        setTimeout(() => activeIndex > -1 && this.moveActiveBar(activeIndex));
        window.addEventListener('resize', this.moveHandle);
    }

    changeTab(tab: string, i: number = null) {
        if (typeof i === 'number') {
            this.moveActiveBar(i);
        }
        this.activeTab = tab;
        if (this.target) {
            this.target.changeTab(this.activeTab || null);
        }
        this.tabChange.emit(tab);
    }

    moveActiveBar(i: number) {
        const tabs = this.tabDoms;
        this.offsetLeft = 0;
        this.offsetLeft += tabs[i].offsetLeft;
        this.tabBarWidth = tabs[i].clientWidth;
    }

    ngDestroy() {
        window.removeEventListener('resize', this.moveHandle);
    }
}

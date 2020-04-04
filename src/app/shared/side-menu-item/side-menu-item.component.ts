import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISideMenuItem } from '../shared-models';

@Component({
    selector: 'app-side-menu-item',
    templateUrl: './side-menu-item.component.html',
    styleUrls: ['./side-menu-item.component.scss'],
})
export class SideMenuItemComponent implements OnInit {
    @Input() sideMenuItem: ISideMenuItem;
    @Output() changeSelection = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    openLink(link) {
        this.changeSelection.next(link);
    }
}

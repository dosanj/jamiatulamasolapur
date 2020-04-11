import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
} from '@angular/core';
import { ISideMenuItem } from '../shared-models';

@Component({
    selector: 'app-side-menu-item',
    templateUrl: './side-menu-item.component.html',
    styleUrls: ['./side-menu-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SideMenuItemComponent implements OnInit {
    @Input() sideMenuItem: ISideMenuItem;
    @Output() changeSelection = new EventEmitter();
    @Input() currentLanguage: string;

    constructor() {}

    ngOnInit() {}

    openLink(item: ISideMenuItem) {
        this.changeSelection.next(item);
    }
}

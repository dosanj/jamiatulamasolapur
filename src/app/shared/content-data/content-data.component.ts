import { Component, OnInit, Input } from '@angular/core';
import { IContentData } from '../shared-models';

@Component({
    selector: 'app-content-data',
    templateUrl: './content-data.component.html',
    styleUrls: ['./content-data.component.css'],
})
export class ContentDataComponent implements OnInit {
    @Input() content: IContentData;

    constructor() {}

    ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { contentData } from '../../shared/content-data';
import { IContentData, ISideMenuItem } from '../../shared/shared-models';
import { sideMenuDetails } from '../home-page/navigation-page-data';

@Component({
    selector: 'app-content-page',
    templateUrl: './content-page.component.html',
    styleUrls: ['./content-page.component.scss'],
})
export class ContentPageComponent implements OnInit {
    content$: Observable<IContentData>;
    contentData: {
        [key: string]: IContentData;
    } = {};
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.expandList();
        this.content$ = this.route.params.pipe(
            tap(console.log),
            map((params: any) => this.contentData['/' + params.link])
        );
    }
    expand(item: ISideMenuItem) {
        if ((!item.children || item.children.length === 0) && item.name) {
            const link = this.createUrl(item);
            this.contentData[link] = item.content;
            return;
        }
        item.children.forEach((i) => {
            this.expand(i);
        });
        return null;
    }
    expandList() {
        sideMenuDetails.forEach((item) => {
            this.expand(item);
        });
    }
    createUrl(item: ISideMenuItem) {
        if (item.url) {
            return item.url;
        }
        if (item && item.name && !item.children) {
            return '/' + item.name.toLowerCase().replace(/ /g, '-');
        }
        return null;
    }
}

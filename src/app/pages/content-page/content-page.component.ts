import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { contentData, getContentData } from '../../shared/content-data';
import { IContentData, ISideMenuItem } from '../../shared/shared-models';
import { sideMenuDetails } from '../home-page/navigation-page-data';

@Component({
    selector: 'app-content-page',
    templateUrl: './content-page.component.html',
    styleUrls: ['./content-page.component.scss'],
})
export class ContentPageComponent implements OnInit {
    content$: Observable<IContentData>;
    contentData = getContentData();
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.content$ = this.route.params.pipe(
            tap(console.log),
            map((params: any) => this.contentData['/' + params.link])
        );
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { contentData } from '../../shared/content-data';
import { IContentData } from '../../shared/shared-models';

@Component({
    selector: 'app-content-page',
    templateUrl: './content-page.component.html',
    styleUrls: ['./content-page.component.scss'],
})
export class ContentPageComponent implements OnInit {
    content$: Observable<IContentData>;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.content$ = this.route.params.pipe(
            tap(console.log),
            map((params: any) => contentData[params.link])
        );
    }
}

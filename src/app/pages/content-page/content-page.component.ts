import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { contentData, getContentData } from '../../shared/content-data';
import { IContentData, ISideMenuItem } from '../../shared/shared-models';
import { sideMenuDetails } from '../home-page/navigation-page-data';
interface IHomePageItem {
    text: string;
    link?: string;
    url?: string;
    background?: string;
}
@Component({
    selector: 'app-content-page',
    templateUrl: './content-page.component.html',
    styleUrls: ['./content-page.component.scss'],
})
export class ContentPageComponent implements OnInit {
    content$: Observable<IContentData>;
    contentData = getContentData();
    homePageItems: IHomePageItem[] = [
        {
            text: ' Cleanliness In Muslim Society ',
            link: '/cleanliness',
        },
        {
            text: 'Property Distribution ',
            link: '/property-distribution',
        },
        { text: 'Corruption', link: '/corruption' },
        {
            text: 'Marriage in Islam',
            link: '/marriage-age',
        },
        { text: 'Parenting Guidelines', link: '/upto-5-years' },
        { text: 'Special Occasions', link: '/eid-ul-fitr' },
        { text: 'Islamic History', link: '/muslim-in-freedom-of-india' },
        {
            text: 'Applying for Govt. Documents',
            link: '/apply-for-govt.-documents',
        },
    ];
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.content$ = this.route.params.pipe(
            tap(console.log),
            map((params: any) => this.contentData['/' + params.link])
        );
        this.homePageItems.forEach((item: IHomePageItem) => {
            item.background =
                '#' +
                (
                    'd0dee' + ((Math.random() * (1 << 24)) | 0).toString(16)
                ).slice(-6) +
                '50';
            console.log(item.background);
        });
    }
    openLink(item: IHomePageItem) {
        if (item.url) {
            window.open(item.url, '_blank');
        } else if (item.link) {
            this.router.navigate([item.link]);
        }
    }
}

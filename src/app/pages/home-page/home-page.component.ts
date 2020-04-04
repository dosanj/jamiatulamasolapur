import { Component, OnInit } from '@angular/core';
import { ISideMenuItem } from '../../shared/shared-models';
import { sideMenuDetails } from './navigation-page-data';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    sideMenuDetails = sideMenuDetails;
    breadcrumb = [];
    isCollapsed = false;
    constructor(private router: Router) {}

    ngOnInit() {
        const url = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.changeSelection(event.url);
            }
        });
    }
    openLink(link) {
        if (link) {
            this.router.navigate([link]);
        }
    }
    changeSelection(link) {
        this.breadcrumb = [];
        this.sideMenuDetails.forEach((item) => {
            item.expand = false;
            const selected = this.markItemSelected(item, link);
            if (selected) {
                this.breadcrumb.unshift(item.name);
            }
            item.expand = selected || item.expand;
        });
    }

    markItemSelected(item: ISideMenuItem, link): boolean {
        if (!item.children || item.children.length === 0) {
            item.selected = item.link && link ? item.link === link : false;
            return item.selected;
        }
        item.expand = false;
        item.children.forEach((i) => {
            const selected = this.markItemSelected(i, link);
            if (selected) {
                this.breadcrumb.unshift(i.name);
            }
            item.expand = selected || item.expand;
        });
        return item.expand;
    }
    markItemCollapsed(item) {
        item.expand = false;
        if (item.children && item.children.length > 0) {
            item.children.forEach((i) => this.markItemCollapsed(i));
        }
    }
    collpaseEverything() {
        this.sideMenuDetails.forEach((item) => this.markItemCollapsed(item));
    }
}

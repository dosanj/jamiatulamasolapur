import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ISideMenuItem } from '../../shared/shared-models';
import { sideMenuDetails } from './navigation-page-data';
import { createUrl } from '../../shared/content-data';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    sideMenuDetails = sideMenuDetails;
    breadcrumb = [];
    isCollapsed = false;
    currentLanguage = 'English';
    constructor(private router: Router) {}

    ngOnInit() {
        const url = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.changeSelection(event.url);
            }
        });
        const myElementToCheckIfClicksAreInsideOf = document.getElementById(
            'nz-layout'
        );
        document.body.addEventListener('click', (event: any) => {
            if (myElementToCheckIfClicksAreInsideOf.contains(event.target)) {
                if (this.isSmallDevice()) {
                    this.isCollapsed = true;
                }
            }
        });
    }
    setLanguage(lang: string) {
        this.currentLanguage = lang;
    }
    isSmallDevice() {
        // https://stackoverflow.com/a/8876069
        const width = Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
        );
        if (width <= 576) {
            return true;
        }
        return false;
    }
    openLink(item: ISideMenuItem) {
        if (item) {
            if (item.url) {
                window.open(item.url, '_blank');
            } else {
                this.router.navigate([createUrl(item)]);
            }
        }
        if (this.isSmallDevice()) {
            this.isCollapsed = true;
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
            item.selected =
                item.name && link ? createUrl(item) === link : false;
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

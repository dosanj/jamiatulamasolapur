/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideMenuItemComponent } from './side-menu-item.component';

describe('SubMenuItemComponent', () => {
    let component: SideMenuItemComponent;
    let fixture: ComponentFixture<SideMenuItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SideMenuItemComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideMenuItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentDataComponent } from './content-data.component';

describe('ContentDataComponent', () => {
  let component: ContentDataComponent;
  let fixture: ComponentFixture<ContentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

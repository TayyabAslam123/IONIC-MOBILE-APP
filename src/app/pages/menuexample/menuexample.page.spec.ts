import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuexamplePage } from './menuexample.page';

describe('MenuexamplePage', () => {
  let component: MenuexamplePage;
  let fixture: ComponentFixture<MenuexamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuexamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuexamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

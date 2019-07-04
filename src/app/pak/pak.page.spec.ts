import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PakPage } from './pak.page';

describe('PakPage', () => {
  let component: PakPage;
  let fixture: ComponentFixture<PakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

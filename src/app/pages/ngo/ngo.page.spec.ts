import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoPage } from './ngo.page';

describe('NgoPage', () => {
  let component: NgoPage;
  let fixture: ComponentFixture<NgoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

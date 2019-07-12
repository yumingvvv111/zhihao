import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskHomePage } from './ask-home.page';

describe('AskHomePage', () => {
  let component: AskHomePage;
  let fixture: ComponentFixture<AskHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

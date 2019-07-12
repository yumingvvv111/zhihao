import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySettingHomePage } from './my-setting-home.page';

describe('MySettingHomePage', () => {
  let component: MySettingHomePage;
  let fixture: ComponentFixture<MySettingHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySettingHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySettingHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

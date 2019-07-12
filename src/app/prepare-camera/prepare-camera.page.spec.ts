import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareCameraPage } from './prepare-camera.page';

describe('PrepareCameraPage', () => {
  let component: PrepareCameraPage;
  let fixture: ComponentFixture<PrepareCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareCameraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

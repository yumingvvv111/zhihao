import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanPlantplantPage } from './scan-plantplant.page';

describe('ScanPlantplantPage', () => {
  let component: ScanPlantplantPage;
  let fixture: ComponentFixture<ScanPlantplantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanPlantplantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanPlantplantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetSettingsComponent } from './cabinet-settings.component';

describe('CabinetSettingsComponent', () => {
  let component: CabinetSettingsComponent;
  let fixture: ComponentFixture<CabinetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

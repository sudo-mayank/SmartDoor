import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterySettingsComponent } from './battery-settings.component';

describe('BatterySettingsComponent', () => {
  let component: BatterySettingsComponent;
  let fixture: ComponentFixture<BatterySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverInfoComponent } from './driverinfo.component';

describe('driverinfoComponent', () => {
  let component: DriverInfoComponent;
  let fixture: ComponentFixture<DriverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

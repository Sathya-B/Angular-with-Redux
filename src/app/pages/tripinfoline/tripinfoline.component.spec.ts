import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripInfoLineComponent } from './tripinfoline.component';

describe('TripinfoComponent', () => {
  let component: TripInfoLineComponent;
  let fixture: ComponentFixture<TripInfoLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripInfoLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripInfoLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

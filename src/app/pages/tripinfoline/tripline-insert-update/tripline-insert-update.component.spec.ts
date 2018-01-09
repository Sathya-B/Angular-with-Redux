import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripLineInsertUpdateComponent } from './tripline-insert-update.component';

describe('TripInsertUpdateComponent', () => {
  let component: TripLineInsertUpdateComponent;
  let fixture: ComponentFixture<TripLineInsertUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripLineInsertUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripLineInsertUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

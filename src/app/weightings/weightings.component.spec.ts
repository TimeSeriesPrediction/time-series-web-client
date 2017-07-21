import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightingsComponent } from './weightings.component';

describe('WeightingsComponent', () => {
  let component: WeightingsComponent;
  let fixture: ComponentFixture<WeightingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

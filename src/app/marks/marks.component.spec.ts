import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksComponent } from './marks.component';

describe('MarksComponent', () => {
  let component: MarksComponent;
  let fixture: ComponentFixture<MarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
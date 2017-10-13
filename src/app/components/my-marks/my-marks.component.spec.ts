import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyMarksComponent } from './my-marks.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MyMarksComponent', () => {
  let component: MyMarksComponent;
  let fixture: ComponentFixture<MyMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMarksComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ActivatedRoute]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffToModuleComponent } from './staff-to-module.component';

describe('StaffToModuleComponent', () => {
  let component: StaffToModuleComponent;
  let fixture: ComponentFixture<StaffToModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffToModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffToModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

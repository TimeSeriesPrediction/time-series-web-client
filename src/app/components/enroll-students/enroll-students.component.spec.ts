import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EnrollStudentsComponent } from './enroll-students.component';
import {ModulesApi} from'../../services/api-service/modules-api/modules-api.service';
import {AuthService} from  '../../services/auth-service/auth.service';
describe('EnrollStudentsComponent', () => {
  let component: EnrollStudentsComponent;
  let fixture: ComponentFixture<EnrollStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollStudentsComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      imports:[ModulesApi,AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});

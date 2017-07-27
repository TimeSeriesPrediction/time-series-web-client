import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdDatepickerModule,MdInputModule } from '@angular/material';
import { AssignmentsComponent } from './assignments.component';
import {UsersApi} from '../services/api-service/users-api/users-api.mock';
import {User} from '../models/User';
import {Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';

describe('AssignmentsComponent', () => {
  let component: AssignmentsComponent;
  let fixture: ComponentFixture<AssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
    ],
      declarations: [ AssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

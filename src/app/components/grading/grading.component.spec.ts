import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradingComponent } from './grading.component';

import { ApiService } from '../../services/api-service/api.service';

import {UsersApi} from '../../services/api-service/users-api/users-api.mock';
import {User} from '../../models/User';
import {Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';

describe('GradingComponent', () => {
  let component: GradingComponent;
  let fixture: ComponentFixture<GradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpModule],
      declarations: [ GradingComponent ],
      providers: [UsersApi,ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightingsComponent } from './weightings.component';
import { NavbarComponent } from '../navbar/navbar.component';

import {UsersApi} from '../../services/api-service/users-api/users-api.mock';
import {User} from '../../models/User';
import {Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';

import { ApiService } from '../../services/api-service/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth-service/auth.service';
import { AppConfig } from '../../app.config';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('WeightingsComponent', () => {
  let component: WeightingsComponent;
  let fixture: ComponentFixture<WeightingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ WeightingsComponent, NavbarComponent ],
      providers: [UsersApi,ApiService, AuthService, AppConfig],
      schemas: [NO_ERRORS_SCHEMA]
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

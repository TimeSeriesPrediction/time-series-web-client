import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Http, BaseRequestOptions } from '@angular/http';

import { UserMockServerProvider } from '../../users.mockserver';
import { NavbarComponent } from './navbar.component';
import { AuthService } from '../../services/auth-service/auth.service'

import {UsersApi} from '../../services/api-service/users-api/users-api.mock';
import {User} from '../../models/User';
import {Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';

import { ApiService } from '../../services/api-service/api.service';
import { AppConfig } from '../../app.config';
import { ObservablesMock } from '../../mocks/observables.mock';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    let observables = new ObservablesMock();

    let mockAuthService = {
      getCurrentLoggedInUser: observables.ResolveObservable({ username: 'testuser123' })
    }

    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpModule],
      declarations: [ NavbarComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Http, useValue: UserMockServerProvider },
        MockBackend,
        BaseRequestOptions,
        ApiService,
        AppConfig
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

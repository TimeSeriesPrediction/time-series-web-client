import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Http, BaseRequestOptions } from '@angular/http';

import { AppConfig } from '../../app.config'
import { UserMockServerProvider } from '../../users.mockserver';
import { AuthService } from './auth.service';
import {ApiService} from '../api-service/api.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppConfig,
        AuthService,
        ApiService,
        { provide: Http, useValue: UserMockServerProvider },
        MockBackend,
        BaseRequestOptions
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

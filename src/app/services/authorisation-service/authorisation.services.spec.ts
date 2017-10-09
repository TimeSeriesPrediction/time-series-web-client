import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Http, BaseRequestOptions, Headers } from '@angular/http';

import { AppConfig } from '../../app.config';
import { UserMockServerProvider } from '../../users.mockserver';
import { AuthorisationService } from './authorisation.service';
import { HttpModule } from '@angular/http';
import { User } from '../../models/user-models/User';

import { ObservablesMock } from '../../mocks/observables.mock';
import 'rxjs/add/operator/do';

fdescribe('Authorisation Service', () => {
  let mockAuthentication, mockUser, appConfig, service;
  let observables = new ObservablesMock();


  beforeEach(() => {

    mockUser = new User('u12345678', 'Jiminy Cricket', 'u12345678@tuks.co.za');
    mockUser.permissions = {
      admin: false,
      modules: []
    };

    appConfig = new AppConfig();

    TestBed.configureTestingModule({
      providers: [
        AppConfig,
        AuthorisationService,
        MockBackend,
        BaseRequestOptions,
        HttpModule
      ],

    });

    service = getService();
  });

  function getService() {
    mockAuthentication = {
      getCurrentLoggedInUser: observables.ResolveObservable(mockUser),
    };

    return new AuthorisationService(mockAuthentication, appConfig);
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isAdmin', function() {

    it('should return true if user is admin', function() {
      mockUser.permissions.admin = true;
      service = getService();

      expect(service.isAdmin()).toBeTruthy();
    });

    it('should return false if user is not admin', function() {
      expect(service.isAdmin()).toBeFalsy();
    });

  });

  describe('isStaffMember', function() {
    it('should return false if only student', function() {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.STUDENT
      });
      service = getService();

      expect(service.isStaffMember()).toBeFalsy();
    });

    it('should return true if staff member for any module', function() {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.ADMIN_VIEW
      });
      service = getService();

      expect(service.isStaffMember()).toBeTruthy();
    });
  });

  describe('getPermissionForModule', function() {
    it('should return 0 if no permissions object for module', function() {

    });

    it('should return correct permission if student', function() {

    });

    it('should return correct permission if admin', function() {

    });
  });



});

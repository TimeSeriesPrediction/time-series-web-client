import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Http, BaseRequestOptions, Headers, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import { UserMockServerProvider } from '../../users.mockserver';
import { AuthorisationService } from './authorisation.service';
import { HttpModule } from '@angular/http';
import { User } from '../../models/user-models/User';
import { Observable } from 'rxjs/Observable';

import { ObservablesMock } from '../../mocks/observables.mock';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

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
      getCurrentLoggedInUser: () => {
        var obs = observables.ResolveObservable(mockUser)();
        return obs.map((response: Response) => {
          return response.json();
        }) },
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
      expect(service.getPermissionForModule('COS326')).toBe(0);
    });

    it('should return correct permission if student', function() {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.STUDENT
      });
      service = getService();

      expect(service.getPermissionForModule('COS301')).toBe(appConfig.PERMISSION_TYPE.STUDENT);
    });

    it('should return correct permission if admin', function() {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.ADMIN_EDIT
      });
      service = getService();

      expect(service.getPermissionForModule('COS301')).toBe(appConfig.PERMISSION_TYPE.ADMIN_EDIT);
    });
  });

  describe('isStudent', function() {

    beforeEach(function() {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.STUDENT
      });

      mockUser.permissions.modules.push({
        moduleCode: 'COS326',
        permission: appConfig.PERMISSION_TYPE.ADMIN_EDIT
      });

      service = getService();
    });

    it('should return true if student', function() {
      expect(service.isStudent('COS301')).toBeTruthy();
    });

    it ('should return false if staff member', function() {
      expect(service.isStudent('COS326')).toBeFalsy();
    });

    it('should return false if no permissions for module', function() {
      expect(service.isStudent('COS330')).toBeFalsy();
    });

  });

  describe('isStaffMemberForModule', function() {

    beforeEach(function() {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.STUDENT
      });

      mockUser.permissions.modules.push({
        moduleCode: 'COS326',
        permission: appConfig.PERMISSION_TYPE.ADMIN_VIEW
      });

      service = getService();
    });

    it('should return false if student', function() {
      expect(service.isStaffMemberForModule('COS301')).toBeFalsy();
    });

    it ('should return true if staff member', function() {
      expect(service.isStaffMemberForModule('COS326')).toBeTruthy();
    });

    it('should return false if no permissions for module', function() {
      expect(service.isStaffMemberForModule('COS330')).toBeFalsy();
    });

  });



});

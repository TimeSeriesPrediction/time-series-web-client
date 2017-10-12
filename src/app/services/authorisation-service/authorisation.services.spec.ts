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

describe('Authorisation Service', () => {
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

    it('should return true if user is admin', function(done) {
      mockUser.permissions.admin = true;
      service = getService();

      service.isAdmin().then(function(admin) {
        expect(admin).toBeTruthy();
        done();
      });
    });

    it('should return false if user is not admin', function(done) {
      service.isAdmin().then(function(admin) {
        expect(admin).toBeFalsy();
        done();
      });
    });

  });

  describe('isStaffMember', function() {
    it('should return false if only student', function(done) {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.STUDENT
      });
      service = getService();

      service.isStaffMember().then(function(staff){
        expect(staff).toBeFalsy();
        done();
      });

    });

    it('should return true if staff member for any module', function(done) {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.ADMIN_VIEW
      });
      service = getService();

      service.isStaffMember().then(function(staff){
        expect(staff).toBeTruthy();
        done();
      });
    });
  });

  describe('getPermissionForModule', function() {
    it('should return 0 if no permissions object for module', function(done) {
      service.getPermissionForModule('COS326').then(function(permission){
        expect(permission).toBe(0);
        done();
      });
    });

    it('should return correct permission if student', function(done) {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.STUDENT
      });
      service = getService();

      service.getPermissionForModule('COS301').then(function (permission) {
        expect(permission).toBe(appConfig.PERMISSION_TYPE.STUDENT);
        done();
      });
    });

    it('should return correct permission if admin', function(done) {
      mockUser.permissions.modules.push({
        moduleCode: 'COS301',
        permission: appConfig.PERMISSION_TYPE.ADMIN_EDIT
      });
      service = getService();

      service.getPermissionForModule('COS301').then(function(permission){
        expect(permission).toBe(appConfig.PERMISSION_TYPE.ADMIN_EDIT);
        done();
      });
    });
  });

  describe('isStudentForModule', function() {

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

    it('should return true if student', function(done) {
      service.isStudentForModule('COS301').then(function(student) {
        expect(student).toBeTruthy();
        done();
      });
    });

    it ('should return false if staff member', function(done) {
      service.isStudentForModule('COS326').then(function(student) {
        expect(student).toBeFalsy();
        done();
      });
    });

    it('should return false if no permissions for module', function(done) {
      service.isStudentForModule('COS330').then(function(student){
        expect(student).toBeFalsy();
        done();
      });
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

    it('should return false if student', function(done) {
      service.isStaffMemberForModule('COS301').then(function (staff) {
        expect(staff).toBeFalsy();
        done();
      });
    });

    it ('should return true if staff member', function(done) {
      service.isStaffMemberForModule('COS326').then(function(staff) {
        expect(staff).toBeTruthy();
        done();
      });
    });

    it('should return false if no permissions for module', function(done) {
      service.isStaffMemberForModule('COS330').then(function(staff) {
        expect(staff).toBeFalsy();
        done();
      });
    });

  });



});

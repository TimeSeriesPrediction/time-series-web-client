import { Http, BaseRequestOptions, Headers } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { ModulesApi } from './modules-api.service';
import { ObservablesMock } from '../../../mocks/observables.mock';
import { ApiService } from '../api.service';
import { Assessment } from '../../../models/Assessment';
import 'rxjs/add/operator/do';
import { Module } from '../../../models/Module';
import { User } from '../../../models/user-models/User';

describe('ModulesApiService', () => {
  let mockApi, appConfig;
  let observables = new ObservablesMock();

  beforeEach(() => {

    mockApi = {
      get: observables.ResolveObservable({ message: 'response message'}),
      post: observables.ResolveObservable({ message: 'response message'}),
      put: observables.ResolveObservable({ message: 'response message'}),
      del: observables.ResolveObservable({ message: 'response message'})
    };

    spyOn(mockApi, 'post').and.callThrough();
    spyOn(mockApi, 'put').and.callThrough();
    spyOn(mockApi, 'del').and.callThrough();
    spyOn(mockApi, 'get').and.callThrough();

    TestBed.configureTestingModule({
      providers: [
        ModulesApi,
        { provide: ApiService, useValue: mockApi }
      ]
    });
  });

  it('should be created', inject([ModulesApi], (service: ModulesApi) => {
    expect(service).toBeTruthy();
  }));

  describe('addModule', function() {
    it ('should call api post with correct args', function (done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.addModule('Software Engineering', 'COS 301').subscribe((message) => {
          expect(mockApi.post.calls.mostRecent().args[0]).toBe('/modules/');
          expect(mockApi.post.calls.mostRecent().args[1].name).toBe('Software Engineering');
          expect(mockApi.post.calls.mostRecent().args[1].code).toBe('COS 301');
          done();
        })
      })();
    });

    it('should return a message observable', function(done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.addModule('Software Engineering', 'COS 301').subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });

  describe('assignHOD', function() {
    it ('should call api put with correct args', function (done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.assignHOD('COS301', 's12345678').subscribe((message) => {
          expect(mockApi.put.calls.mostRecent().args[0]).toBe('/modules/assign-hod/');
          expect(mockApi.put.calls.mostRecent().args[1].code).toBe('COS301');
          expect(mockApi.put.calls.mostRecent().args[1].staffNumber).toBe('s12345678');
          done();
        })
      })();
    });

    it('should return a message observable', function(done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.assignHOD('COS301', 's12345678').subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });

  describe('deleteModule', function() {
    it ('should call api del with correct args', function (done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.deleteModule('COS301').subscribe((message) => {
          expect(mockApi.del.calls.mostRecent().args[0]).toBe('/modules/delete?code=COS301');
          done();
        })
      })();
    });

    it('should return a message observable', function(done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.deleteModule('COS301').subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });

  describe('enrollStudents', function() {
    it ('should call api del with correct args', function (done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.enrollStudents('COS301', 2017, ['u12345678', 'u98765432']).subscribe((message) => {
          expect(mockApi.put.calls.mostRecent().args[0]).toBe('/modules/enroll');
          expect(mockApi.put.calls.mostRecent().args[1].code).toBe('COS301');
          expect(mockApi.put.calls.mostRecent().args[1].year).toBe(2017);
          expect(mockApi.put.calls.mostRecent().args[1].studentNrs[0]).toBe('u12345678');
          expect(mockApi.put.calls.mostRecent().args[1].studentNrs[1]).toBe('u98765432');
          done();
        })
      })();
    });

    it('should return a message observable', function(done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.enrollStudents('COS301', 2017, ['u12345678', 'u98765432']).subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });

  describe('getAllModules', function() {

    beforeEach(function() {
      var modules = [
        new Module('Software Engineering', 'COS 301'),
        new Module('Databases', 'COS 326')
      ]

      mockApi.get = observables.ResolveObservable({ modules: modules})

      spyOn(mockApi, 'get').and.callThrough();
    });

    it ('should call api get with correct args', function (done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.getAllModules().subscribe((modules) => {
          expect(mockApi.get.calls.mostRecent().args[0]).toBe('/modules/');
          done();
        })
      })();
    });

    it('should return array of modules', function(done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.getAllModules().subscribe((modules) => {
          expect(modules[0].code).toBe('COS 301');
          expect(modules[1].name).toBe('Databases');
          done();
        })
      })();
    });
  });

  describe('getModule', function() {

    beforeEach(function() {
      var module = new Module('Software Engineering', 'COS 301');

      mockApi.get = observables.ResolveObservable({ module })

      spyOn(mockApi, 'get').and.callThrough();
    });

    it ('should call api get with correct args', function (done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.getModule('COS301').subscribe((module) => {
          expect(mockApi.get.calls.mostRecent().args[0]).toBe('/modules/COS301');
          done();
        })
      })();
    });

    it('should return array of modules', function(done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.getModule('COS301').subscribe((mod) => {
          expect(mod.code).toBe('COS 301');
          expect(mod.name).toBe('Software Engineering');
          done();
        })
      })();
    });
  });

  describe('getStudentsByModule', function() {

    beforeEach(function() {
      var students = [
        new User('u12345678', 'Jim', 'test@tuks.co.za', []),
        new User('u87654321', 'Jom', 'test2@tuks.co.za', [])
      ];

      mockApi.get = observables.ResolveObservable({ students })

      spyOn(mockApi, 'get').and.callThrough();
    });

    it ('should call api get with correct args', function (done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.getStudentsByModule('COS301', 2017).subscribe((students) => {
          expect(mockApi.get.calls.mostRecent().args[0]).toBe('/modules/students/2017/COS301');
          done();
        })
      })();
    });

    it('should return array of assessments', function(done) {
      inject([ModulesApi], function(service: ModulesApi) {
        service.getStudentsByModule('COS301', 2017).subscribe((students) => {
          expect(students[0].username).toBe('u12345678');
          expect(students[1].username).toBe('u87654321');
          done();
        })
      })();
    });
  });


});

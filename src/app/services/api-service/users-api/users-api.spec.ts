import { Http, BaseRequestOptions, Headers } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { UsersApi } from './users-api.service';
import { ObservablesMock } from '../../../mocks/observables.mock';
import { ApiService } from '../api.service';
import { Assessment } from '../../../models/Assessment';
import 'rxjs/add/operator/do';
import { AddUserModel } from '../../../models/user-models/AddUserModel';

describe('UsersApiService', () => {
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

    TestBed.configureTestingModule({
      providers: [
        UsersApi,
        { provide: ApiService, useValue: mockApi }
      ]
    });
  });

  it('should be created', inject([UsersApi], (service: UsersApi) => {
    expect(service).toBeTruthy();
  }));

  describe('addUsers', function() {

    var users = [
      new AddUserModel(),
      new AddUserModel()
    ]

    it ('should call api post with correct args', function (done) {
      inject([UsersApi], function(service: UsersApi) {
        service.addUsers(users).subscribe((message) => {
          expect(mockApi.post.calls.mostRecent().args[0]).toBe('/users/add-users');
          expect(mockApi.post.calls.mostRecent().args[1]).toEqual({ users : users} );
          done();
        })
      })();
    });

    it('should return a message observable', function(done) {
      inject([UsersApi], function(service: UsersApi) {
        service.addUsers(users).subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });

  describe('addUser', function() {

    it ('should call api post with correct args', function (done) {
      inject([UsersApi], function(service: UsersApi) {
        service.addUser('u12345678', 'P@55word', 'test@tuks.co.za').subscribe((message) => {
          expect(mockApi.post.calls.mostRecent().args[0]).toBe('/users/');
          expect(mockApi.post.calls.mostRecent().args[1].userId).toBe('u12345678');
          expect(mockApi.post.calls.mostRecent().args[1].password).toBe('P@55word');
          expect(mockApi.post.calls.mostRecent().args[1].email).toBe('test@tuks.co.za');
          done();
        })
      })();
    });

    it('should return a message observable', function(done) {
      inject([UsersApi], function(service: UsersApi) {
        service.addUser('u12345678', 'P@55word', 'test@tuks.co.za').subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });

});

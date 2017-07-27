import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Http, BaseRequestOptions, Headers } from '@angular/http';

import { AppConfig } from '../../app.config'
import { UserMockServerProvider } from '../../users.mockserver';
import { ApiService } from './api.service';

import { ObservablesMock } from '../../mocks/observables.mock';
import 'rxjs/add/operator/do';

describe('AuthService', () => {
  let mockHttp, appConfig;
  let observables = new ObservablesMock();


describe('AuthService', () => {
  let mockHttp, appConfig;


  beforeEach(() => {

    mockHttp = {

      get: observables.ResolveObservable({ authToken: '321'}),
      post: observables.ResolveObservable(),
      put: observables.ResolveObservable(),
      delete: observables.ResolveObservable()

      get: a => a,
      post: a => a,
      put: a => a,
      delete: a => a

    };

    appConfig = new AppConfig();


    spyOn(mockHttp, 'get').and.callThrough();
    spyOn(mockHttp, 'post').and.callThrough();
    spyOn(mockHttp, 'put').and.callThrough();
    spyOn(mockHttp, 'delete').and.callThrough();

    spyOn(mockHttp, 'get');
    spyOn(mockHttp, 'post');
    spyOn(mockHttp, 'put');
    spyOn(mockHttp, 'delete');


    TestBed.configureTestingModule({
      providers: [
        AppConfig,
        ApiService,
        { provide: Http, useValue: mockHttp },
        MockBackend,
        BaseRequestOptions
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should call httpGet with correct arguments',  inject([ApiService], (service: ApiService) => {
    var headers = new Headers();
    service.get('url/to/get', headers);
    expect(mockHttp.get).toHaveBeenCalledWith(appConfig.apiUrl + 'url/to/get', { headers: headers });
  }));

  it('should call httpDelete with correct arguments',  inject([ApiService], (service: ApiService) => {
    var headers = new Headers();
    service.del('url/to/delete', headers);
    expect(mockHttp.delete).toHaveBeenCalledWith(appConfig.apiUrl + 'url/to/delete', { headers: headers });
  }));

  it('should call httpPut with correct arguments',  inject([ApiService], (service: ApiService) => {
    var headers = new Headers();
    var data = { someProp: 'someData'};
    service.put('url/to/put', data, headers);
    expect(mockHttp.put).toHaveBeenCalledWith(appConfig.apiUrl + 'url/to/put', data, { headers: headers });
  }));

  it('should call httpPost with correct arguments',  inject([ApiService], (service: ApiService) => {
    var headers = new Headers();
    var data = { someProp: 'someData'};
    service.post('url/to/post', data, headers);
    expect(mockHttp.post).toHaveBeenCalledWith(appConfig.apiUrl + 'url/to/post', data, { headers: headers });
  }));

  it('should append authToken to headers',  inject([ApiService], (service: ApiService) => {

    sessionStorage.setItem('authToken', '123');

    localStorage.setItem('authToken', '123');

    service.get('url/to/get');
    var headers : Headers = mockHttp.get.calls.argsFor(0)[1].headers;
    expect(headers.get('Authorization')).toBe('123');
  }));



  it('should set new AuthToken',  (done) => {
    inject([ApiService], (service: ApiService) => {
      sessionStorage.setItem('authToken', '123');
      service.get('url/to/get').subscribe((response) => {
        expect(sessionStorage.getItem('authToken')).toBe('321');
        done();
      });
    })();
  });

});

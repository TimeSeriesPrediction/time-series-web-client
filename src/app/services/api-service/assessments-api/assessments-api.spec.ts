import { Http, BaseRequestOptions, Headers } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { AppConfig } from '../../../app.config';
import { AssessmentsApi } from './assessments-api.service';
import { ObservablesMock } from '../../../mocks/observables.mock';
import { ApiService } from '../api.service';
import 'rxjs/add/operator/do';

fdescribe('ApiService', () => {
  let mockApi, appConfig;
  let observables = new ObservablesMock();

  beforeEach(() => {

    mockApi = {
      get: observables.ResolveObservable({ authToken: '321'}),
      post: observables.ResolveObservable(),
      put: observables.ResolveObservable(),
      del: observables.ResolveObservable()
    };

    appConfig = new AppConfig();

    spyOn(mockApi, 'get').and.callThrough();
    spyOn(mockApi, 'post').and.callThrough();
    spyOn(mockApi, 'put').and.callThrough();
    spyOn(mockApi, 'del').and.callThrough();

    TestBed.configureTestingModule({
      providers: [
        AppConfig,
        { provide: ApiService, useValue: mockApi }
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));



});

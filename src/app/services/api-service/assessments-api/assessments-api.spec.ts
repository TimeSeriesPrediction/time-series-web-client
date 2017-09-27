import { Http, BaseRequestOptions, Headers } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { AssessmentsApi } from './assessments-api.service';
import { ObservablesMock } from '../../../mocks/observables.mock';
import { ApiService } from '../api.service';
import { Assessment } from '../../../models/Assessment';
import 'rxjs/add/operator/do';

describe('AssessmentsApiService', () => {
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
        AssessmentsApi,
        { provide: ApiService, useValue: mockApi }
      ]
    });
  });

  it('should be created', inject([AssessmentsApi], (service: AssessmentsApi) => {
    expect(service).toBeTruthy();
  }));

  describe('AddAssessment', function() {
    it ('should call api put with correct args', function (done) {
      inject([AssessmentsApi], function(service: AssessmentsApi) {
        service.addAssessment('COS301', 2017, new Assessment('Prac', 50, 'COS301', '01-05-2017', '')).subscribe((message) => {
          expect(mockApi.put.calls.mostRecent().args[0]).toBe('/modules/assessment');
          expect(mockApi.put.calls.mostRecent().args[1].code).toBe('COS301');
          expect(mockApi.put.calls.mostRecent().args[1].year).toBe(2017);
          expect(mockApi.put.calls.mostRecent().args[1].assessment.name).toBe('Prac');
          expect(mockApi.put.calls.mostRecent().args[1].assessment.weight).toBe(50);
          done();
        })
      })();
    });

    it('should return a message observable', function(done) {
      inject([AssessmentsApi], function(service: AssessmentsApi) {
        service.addAssessment('COS301', 2017, new Assessment('Prac', 50, 'COS301', '01-05-2017', '')).subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });

  describe('AddQuery', function() {
    it ('should call api post with correct args', function (done) {
      inject([AssessmentsApi], function(service: AssessmentsApi) {
        service.addQuery('COS301', 2016, 2, 'I am a query') .subscribe((message) => {
          expect(mockApi.post.calls.mostRecent().args[0]).toBe('/modules/query');
          expect(mockApi.post.calls.mostRecent().args[1].code).toBe('COS301');
          expect(mockApi.post.calls.mostRecent().args[1].year).toBe(2016);
          expect(mockApi.post.calls.mostRecent().args[1].number).toBe(2);
          expect(mockApi.post.calls.mostRecent().args[1].query).toBe('I am a query');
          done();
        })
      })();
    });

    it('should return a message observable', function(done) {
      inject([AssessmentsApi], function(service: AssessmentsApi) {
        service.addQuery('COS301', 2016, 2, 'I am a query').subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });

});

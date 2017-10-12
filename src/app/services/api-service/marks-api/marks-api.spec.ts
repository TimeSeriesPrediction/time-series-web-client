import { Http, BaseRequestOptions, Headers } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MarksApi } from './marks-api.service';
import { ObservablesMock } from '../../../mocks/observables.mock';
import { ApiService } from '../api.service';
import { Mark } from '../../../models/marks-models/Mark';
import 'rxjs/add/operator/do';

describe('MarksApiService', () => {
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
        MarksApi,
        { provide: ApiService, useValue: mockApi }
      ]
    });
  });

  it('should be created', inject([MarksApi], (service: MarksApi) => {
    expect(service).toBeTruthy();
  }));

  describe('getMarksByAssessment', function() {

    beforeEach(function() {
      var marks = [
        new Mark('u12345678', 80),
        new Mark('u87654321', 80)
      ];

      mockApi.get = observables.ResolveObservable({ marks: marks })

      spyOn(mockApi, 'get').and.callThrough();
    })

    it ('should call api get with correct args', function (done) {
      inject([MarksApi], function(service: MarksApi) {
        service.getMarksByAssessment('123').subscribe((marks) => {
          expect(mockApi.get.calls.mostRecent().args[0]).toBe('/marks/123');
          done();
        })
      })();
    });

    it('should return a marks array', function(done) {
      inject([MarksApi], function(service: MarksApi) {
        service.getMarksByAssessment('123').subscribe((marks) => {
          console.log(marks);
          expect(marks[0].username).toBe('u12345678');
          expect(marks[1].username).toBe('u87654321');
          expect(marks[1].mark).toBe(80);
          done();
        })
      })();
    });
  });

  describe('addFinalMarksToAssessment', function() {
    var marks = [
      new Mark('u12345678', 50),
      new Mark('u87654321', 80)
    ];

    it ('should call api post with correct args', function (done) {
      inject([MarksApi], function(service: MarksApi) {
        service.addFinalMarksToAssessment('123', marks,'COS121').subscribe((message) => {
          expect(mockApi.post.calls.mostRecent().args).toEqual(['/marks/', { assessmentId: '123', marks: [{ mark: 50, username: 'u12345678'}, {mark: 80, username: 'u87654321'}], moduleCode:'COS121'}]);
          done();
        })
      })();
    });

    it('should return a response message', function(done) {
      inject([MarksApi], function(service: MarksApi) {
        service.addFinalMarksToAssessment('123', marks,'COS121').subscribe((message) => {
          expect(message).toBe('response message');
          done();
        })
      })();
    });
  });
});

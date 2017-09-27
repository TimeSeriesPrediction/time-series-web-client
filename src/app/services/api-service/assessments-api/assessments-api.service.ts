import {Injectable} from '@angular/core';
import {ApiService } from '../api.service';
import {Assessment} from '../../../models/Assessment';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class AssessmentsApi {

  constructor(private _api : ApiService){

  }

  getAssessmentsByModule(moduleCode: String, year: number) : Observable<Assessment[]> {
    return this._api.get('/modules/assessments/' + year + '/' + moduleCode)
      .map((response: Response) => <Assessment[]>response.json().assessments);
  }

  addAssessment(moduleCode: String, year: number, assessment: Assessment) : Observable<String> {
    return this._api.put('/modules/assessment', {code: moduleCode, year: year, assessment: assessment})
      .map((response: Response) => <String>response.json().message);
  }

  addQuery(moduleCode: String, year: number, assessmentNumber: number, query: String) {
    return this._api.post('/modules/query', {code: moduleCode, year: year, number: assessmentNumber, query: query})
      .map((response: Response) => <String>response.json().message);
  }

}

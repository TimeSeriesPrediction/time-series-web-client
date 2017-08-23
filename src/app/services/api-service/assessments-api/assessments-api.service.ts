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

  getAssessmentsByModule(moduleId : number) : Observable<Assessment[]>{
    return this._api.get('/assessments?moduleId=' + moduleId)
      .map((response: Response) => <Assessment[]>response.json());
  }

}

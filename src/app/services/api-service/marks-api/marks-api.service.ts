import {Injectable} from '@angular/core';
import {ApiService } from '../api.service';
import {Assessment} from '../../../models/Assessment';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http'
import 'rxjs/add/operator/map';
import { Mark } from '../../../models/marks-models/Mark';

@Injectable()
export class MarksApi {

  constructor(private _api : ApiService){

  }

  getMarksByAssessment(assessmentId: String) : Observable<Mark[]> {
    return this._api.get('/marks/' + assessmentId)
      .map((response: Response) => <Mark[]>response.json().marks);
  }

  addFinalMarksToAssessment(assessmentId: String, marks: Mark[]) : Observable<String> {
    var marksAdded = marks.map((mark) => {
      return {
        mark: mark.finalResult,
        userId: mark.userId
      }
    })

    return this._api.post('/marks/', {assessmentId: assessmentId, marks: marksAdded})
      .map((response: Response) => <String>response.json().message);
  }


}

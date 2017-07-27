import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Assessment} from '../../../models/Assessment';

import {Observable} from 'rxjs/Rx';

import {Observable} from "rxjs/Rx";

import {Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class AssessmentsApi {

  constructor(private _api : ApiService){

  }

  getAssessmentsByModule(moduleId : number) : Observable<Assessment[]>{
    var assessments: Assessment[] = [
      new Assessment("Practical 1", 15, moduleId),
      new Assessment("Semester test 1", 50, moduleId),
      new Assessment("Class test 1", 20, moduleId)
    ]

    return Observable.of(assessments);
  }

}

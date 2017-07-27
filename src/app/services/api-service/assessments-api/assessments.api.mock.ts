import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Assessment} from '../../../models/Assessment';
import {Observable} from "rxjs/Rx";
import {Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class AssessmentsApi {
public assessments: Assessment[] =[];
  constructor(private _api : ApiService){

  }

  getAssessmentsByModule(moduleId : string) : Observable<Assessment[]>{
    return Observable.of(this.assessments);
  }
  addAssessment(moduleID:string,name:string,deadline:string,link:string)
  {
    var newAssessment = new Assessment(moduleID,0,name,deadline,link);
   // alert(newAssessment.name+newAssessment.deadline+newAssessment.moduleId+newAssessment.link);
  
   this.assessments.push(newAssessment);
  }

}

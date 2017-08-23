import {Injectable} from '@angular/core';
import {ApiService } from '../api.service';
import {Modules} from '../../../models/Modules';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ModulesApiService 
{
  providers: [ApiService];
  constructor(private _api : ApiService){

  }

  getAssessmentsByModule() : Observable<Modules[]>{
    return this._api.get('/modules')
      .map((response: Response) => <Modules[]>response.json());
  }

}
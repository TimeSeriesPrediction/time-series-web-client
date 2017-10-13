import {Injectable} from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http'
import {Module} from '../../../models/Module';
import {Assessment} from '../../../models/Assessment';
import {User} from '../../../models/user-models/User';
import 'rxjs/add/operator/map';

@Injectable()
export class ModulesApi {

  constructor(private _api : ApiService){

  }

  addModule(name: String, code: String) : Observable<String> {
    return this._api.post('/modules/', { name: name, code: code})
      .map((response: Response) => <String>response.json().message);
  }

  assignHOD(moduleCode: String, staffNum: String) : Observable<String>{
    return this._api.put('/modules/assign-hod/', { code: moduleCode, staffNumber: staffNum})
      .map((response: Response) => <String>response.json().message);
  }

  deleteModule(moduleCode: String) : Observable<String> {
    return this._api.del('/modules/delete?code=' + moduleCode)
      .map((response: Response) => <String>response.json().message);
  }

  enrollStudents(moduleCode: String, year: number, studentNrs: String[]) : Observable<String> {
    return this._api.put('/modules/enroll', {code: moduleCode, year: year, studentNrs: studentNrs})
      .map((response: Response) => <String>response.json().message);
  }

  getAllModules() : Observable<Module[]>{
    return this._api.get('/modules/')
      .map((response: Response) => <Module[]>response.json().modules);
  }

  getModule(moduleCode: String) : Observable<Module> {
    return this._api.get('/modules/' + moduleCode)
      .map((response: Response) => {
        return <Module>response.json().module
      });
  }

  getStudentsByModule(moduleCode: String, year: number) : Observable<User[]> {
    return this._api.get('/modules/students/'+ year + '/' + moduleCode)
      .map((response: Response) => <User[]>response.json().students);
  }

  getModulesByStudent() : Observable<Module[]> {
    var year = new Date().getFullYear();
    return this._api.get('/modules/my-modules/' + year)
      .map((response: Response) => <Module[]>response.json().modules);
  }

}

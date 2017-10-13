import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/do';



import { AppConfig } from '../../app.config';

@Injectable()
export class ApiService {

  constructor(private _http : Http, private _config: AppConfig) {

  }

  private sendRequest(method, url: string, headers: Headers, data?: any){
    if (!headers){
      headers = new Headers();
    }

    var authToken = sessionStorage.getItem('authToken');
    if (authToken)
      headers.append('Authorization', authToken);

    var observable;

    if(!data){
      observable = method.call(this._http, url, { headers : headers });
    } else {
      observable = method.call(this._http, url, data, { headers : headers });
    }

    observable.map((response) => {
      var result = response.json();
      if (result.authToken){
        sessionStorage.setItem('authToken', result.authToken);
      }
    });

    return observable;
  }

  get(url : string, headers? : Headers) : Observable<Response> {
    return this.sendRequest(this._http.get, this._config.apiUrl + url, headers)

  }

  post(url: string, data : any, headers? : Headers) : Observable<Response>{
    return this.sendRequest(this._http.post, this._config.apiUrl + url, headers, data)
  }

  put(url : string, data : any, headers?: Headers) : Observable<Response>{
    return this.sendRequest(this._http.put, this._config.apiUrl + url, headers, data)
  }

  del(url: string, headers?: Headers) : Observable<Response>{
    return this.sendRequest(this._http.delete, this._config.apiUrl + url, headers)
  }


}

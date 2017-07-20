import {Observable} from 'rxjs/Observable';
import {Response, ResponseOptions} from '@angular/http';

export class ObservablesMock{
  ResolveObservable(responseData?: any){
    return () => {
      var responseOptions = new ResponseOptions();
      responseOptions.body = JSON.stringify(responseData || {});
      responseOptions.status = 200;
      return Observable.of(new Response(responseOptions));
    }
  }
}

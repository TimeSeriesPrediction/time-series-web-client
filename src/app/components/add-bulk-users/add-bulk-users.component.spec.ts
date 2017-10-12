import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AddBulkUsersComponent } from './add-bulk-users.component';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { UserMockServerProvider } from '../../users.mockserver';
import { AuthService } from '../../services/auth-service/auth.service';
import { AppConfig } from '../../app.config';
import { ObservablesMock} from '../../mocks/observables.mock';
import { ApiService } from '../../services/api-service/api.service';

describe('AddBulkUsersComponent', () => {
  let component: AddBulkUsersComponent;
  let fixture: ComponentFixture<AddBulkUsersComponent>;
  let mockApi;
  let observables = new ObservablesMock();


  beforeEach(async(() => {

    mockApi = {
      get: observables.ResolveObservable({ message: 'response message'}),
      post: observables.ResolveObservable({ message: 'response message'}),
      put: observables.ResolveObservable({ message: 'response message'}),
      del: observables.ResolveObservable({ message: 'response message'})
    };

    TestBed.configureTestingModule({
      declarations: [ AddBulkUsersComponent ],
      providers: [
          { provide: Http, useValue: UserMockServerProvider },
          AuthService,
          AppConfig,
          { provide: ApiService, useValue: mockApi }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulkUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});

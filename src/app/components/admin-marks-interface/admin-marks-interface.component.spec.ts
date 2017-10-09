import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RedComponentComponent } from "../red-component/red-component.component";
import { AdminMarksInterfaceComponent } from './admin-marks-interface.component';
import { AgGridModule } from "ag-grid-angular";
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth-service/auth.service';
import { ApiService } from '../../services/api-service/api.service';
import { AppConfig } from '../../app.config';
import { NavbarComponent } from '../navbar/navbar.component';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { UserMockServerProvider } from '../../users.mockserver';
import { ObservablesMock } from '../../mocks/observables.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { User } from '../../models/user-models/User';

describe('AdminMarksInterfaceComponent', () => {
  let component: AdminMarksInterfaceComponent;
  let fixture: ComponentFixture<AdminMarksInterfaceComponent>;

  let observables = new ObservablesMock();
  let mockApiService;

  beforeEach(async(() => {

    mockApiService = {
      sendRequest: observables.ResolveObservable(new User()),
      get: observables.ResolveObservable(new User())
    }

    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents(
          [RedComponentComponent]
        ),
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        AuthService,
        { provide: ApiService, useValue: mockApiService },
        AppConfig,
        { provide: Http, useValue: UserMockServerProvider },
        MockBackend,
        BaseRequestOptions],
      declarations: [
        AdminMarksInterfaceComponent, RedComponentComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMarksInterfaceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });

  it('grid API is available after `detectChanges`', () => {
    fixture.detectChanges();
    expect(component.gridOptions.api).toBeTruthy();
  });

  it('select all button selects all rows', () => {
    fixture.detectChanges();
    component.selectAllRows();
    expect(component.gridOptions.api.getSelectedNodes().length).toEqual(3);
  });

});
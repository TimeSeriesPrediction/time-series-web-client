import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { MockBackend, MockConnection } from '@angular/http/testing';

import { FormsModule } from '@angular/forms';
import { Http, BaseRequestOptions } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { UserMockServerProvider } from '../users.mockserver';
import { LoginComponent } from './login.component';
import { AuthService} from '../auth.service'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MdInputModule,
        MdButtonModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        AuthService,
        { provide: Http, useValue: UserMockServerProvider },
        MockBackend,
        BaseRequestOptions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

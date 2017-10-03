import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MarksComponent } from './marks.component';
import { AuthService } from '../../services/auth-service/auth.service';
import { ApiService } from '../../services/api-service/api.service';
import { AppConfig } from '../../app.config';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MarksComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MarksComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MarksComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  });


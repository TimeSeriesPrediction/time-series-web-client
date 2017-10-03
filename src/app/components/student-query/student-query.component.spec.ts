import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentQueryComponent } from './student-query.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth-service/auth.service';
import { ApiService } from '../../services/api-service/api.service';
import { AppConfig } from '../../app.config';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('StudentQueryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        StudentQueryComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(StudentQueryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});


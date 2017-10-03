import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQueryComponent } from './admin-query.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth-service/auth.service';
import { ApiService } from '../../services/api-service/api.service';
import { AppConfig } from '../../app.config';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AdminQueryComponent', () => {
  let component: AdminQueryComponent;
  let fixture: ComponentFixture<AdminQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQueryComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

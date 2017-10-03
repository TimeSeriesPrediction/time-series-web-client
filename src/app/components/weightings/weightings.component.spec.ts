import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightingsComponent } from './weightings.component';

import {UsersApi} from '../../services/api-service/users-api/users-api.mock';
import {User} from '../../models/User';
import {Injectable} from '@angular/core';
import { HttpModule } from '@angular/http';

import { ApiService } from '../../services/api-service/api.service';


describe('WeightingsComponent', () => {
  let component: WeightingsComponent;
  let fixture: ComponentFixture<WeightingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ WeightingsComponent ],
      providers: [UsersApi,ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

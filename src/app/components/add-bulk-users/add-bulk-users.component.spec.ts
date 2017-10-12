import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulkUsersComponent } from './add-bulk-users.component';

describe('AddBulkUsersComponent', () => {
  let component: AddBulkUsersComponent;
  let fixture: ComponentFixture<AddBulkUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBulkUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulkUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

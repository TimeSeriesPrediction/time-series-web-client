import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersMarkInterfaceComponent } from './markers-mark-interface.component';

describe('MarkersMarkInterfaceComponent', () => {
  let component: MarkersMarkInterfaceComponent;
  let fixture: ComponentFixture<MarkersMarkInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkersMarkInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkersMarkInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

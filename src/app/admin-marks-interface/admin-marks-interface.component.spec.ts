import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RedComponentComponent} from "../red-component/red-component.component";
import { AdminMarksInterfaceComponent } from './admin-marks-interface.component';
import {AgGridModule} from "ag-grid-angular";
describe('AdminMarksInterfaceComponent', () => {
  let component: AdminMarksInterfaceComponent;
  let fixture: ComponentFixture<AdminMarksInterfaceComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [
              AgGridModule.withComponents(
                  [RedComponentComponent]
              )
          ],
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

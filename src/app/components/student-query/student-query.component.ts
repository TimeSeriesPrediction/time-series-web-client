import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SharedDataService } from '../../shared-data.service';
@Component({
  selector: 'app-student-query',
  templateUrl: './student-query.component.html',
  styleUrls: ['./student-query.component.scss'],
  providers: [SharedDataService]
})
export class StudentQueryComponent {
  moduleCode: string = "***";
  assType: string = "test";
  assNumber: number = 9;

  constructor(private _sharedDataService : SharedDataService, public fb: FormBuilder) { }


 ngOnInit() : void {

      this.moduleCode = this._sharedDataService.getModuleCode();

      this.assType = this._sharedDataService.getAssessmentType();
      this.assNumber = this._sharedDataService.getAssessmentNumber();
   }

 public queryForm = this.fb.group({
    reason: ["", Validators.required]
  });

  query(event) {
    console.log(event);
    alert(this.queryForm.value.reason);
  }

}

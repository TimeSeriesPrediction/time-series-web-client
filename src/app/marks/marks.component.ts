import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss'],
  providers: [SharedDataService]
})
export class MarksComponent implements OnInit {

  public modules;

  constructor(private _sharedDataService : SharedDataService) { 
    this.modules =  [
        { code: 'COS301',
          marks :  [
            { code: 'COS 301', assType: 'Test', assNum: '5', assTotal: 20, mark: 15, classAvg: 16, student: 'u12345678' },
            { code: 'COS 301', assType: 'Assignment', assNum: '8', assTotal: 25, mark: 17, classAvg: 20,student: 'u12345678' },
            { code: 'COS 301', assType: 'Test', assNum: '10', assTotal: 15, mark: 15, classAvg: 13,student: 'u12345678' }
          ] },
        { code: 'COS332',
          marks:  [
            { code: 'COS 332', assType: 'Test', assNum: '2', assTotal: 45, mark: 32, classAvg: 33,student: 'u12345678' },
            { code: 'COS 332', assType: 'Assignment', assNum: '9', assTotal: 10, mark: 6, classAvg: 5,student: 'u12345678'},
            { code: 'COS 332', assType: 'Test', assNum: '5', assTotal: 20, mark: 15, classAvg: 16,student: 'u12345678' }
          ] }
      ];
  }

  queryMark(student,assType,assNum,code)
  {
    alert(student + " " + assType + " " + assNum + " "+ code);
    //set shared data vars - to be used in query page

    this._sharedDataService.setAssessmentNumber(assNum);
    this._sharedDataService.setAssessmentType(assType);
    this._sharedDataService.setModuleCode(code);
    this._sharedDataService.setStudentNo(student);
  }

  ngOnInit(){}

}

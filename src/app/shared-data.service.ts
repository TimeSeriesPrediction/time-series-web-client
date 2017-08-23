import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {


  module_code: string = "COS 301";
  assessment_type: string = "Assignment";
  assessment_number: number = 9;
  query_reason: string = "";

  student_number: string = "u15015239";



  constructor() { }

  getModuleCode() : string {
    return this.module_code;
  }

  setModuleCode(code){
    //alert("Setting module code to: " + code);
    this.module_code = code;
  }

  getAssessmentType() : string {
    return this.assessment_type;
  }

  setAssessmentType(type){
    //alert("Setting assessment type  to: " + type);
    this.assessment_type = type;
  }

  getAssessmentNumber() : number {
    return this.assessment_number;
  }

  setAssessmentNumber(number){
    //alert("Setting assessment number to: " + number);
    this.assessment_number = number;
  }
  getQueryReason() : string{
    return this.query_reason;
  }

  setQueryReason(reason){
    //alert("Setting reason to: " + reason);
    this.query_reason = reason;
  }

  getStudentNo() : string{
    return this.student_number;
  }

  setStudentNo(number){
    //alert("Setting reason to: " + reason);
    this.student_number = number;

  }

}

import {User} from './User';
import {Assessment} from './Assessment';

export class Module {

  constructor(name: string, code: String){
    this.name = name;
    this.code = code;
  }


  _id: String;
  name: string;
  code: String;
  HOD: User;
  assessments: Assessment[];
  enrollments: String[];
}

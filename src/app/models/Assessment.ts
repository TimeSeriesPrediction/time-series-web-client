export class Assessment {

  constructor(name: string, weight: number, moduleId: string,  deadline: string,  link:string, _id?: String,){
    this._id = _id;
    this.name = name;
    this.weight = weight;
    this.moduleId = moduleId;
    this.deadline = deadline;
    this.link = link;
  }

  _id: String;
  name: string;
  weight: number;
  moduleId: string;
  deadline: string;
  link:string;

  marks: [{
    username: String;
    mark: Number;
  }];
}

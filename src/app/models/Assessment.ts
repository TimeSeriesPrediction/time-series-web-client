export class Assessment {

  constructor(name: string, weight: number, moduleId: string,  deadline: string,  link:string, id?: String,){
    this.id;
    this.name = name;
    this.weight = weight;
    this.moduleId = moduleId;
    this.deadline = deadline;
    this.link = link;
  }

  id: String;
  name: string;
  weight: number;
  moduleId: string;
  deadline: string;
  link:string;
}

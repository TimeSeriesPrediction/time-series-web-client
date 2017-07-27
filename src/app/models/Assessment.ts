export class Assessment {

  constructor(name: string, weight: number, moduleId: string,  deadline: string,  link:string){
    this.name = name;
    this.weight = weight;
    this.moduleId = moduleId;
    this.deadline = deadline;
    this.link = link;
  }

  name: string;
  weight: number;
  moduleId: string;
  deadline: string;
  link:string;
}

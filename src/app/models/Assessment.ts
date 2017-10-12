export class Assessment {

  constructor(name?: string, weight?: number, moduleCode?: string,  deadline?: string,  link?:string){
    this.name = name;
    this.weight = weight;
    this.moduleCode = moduleCode;
    this.deadline = deadline;
    this.link = link;
  }

  toString()
  {
    return ("Name:"+this.name+" Code: "+this.moduleCode+" Type: "+this.type+" Deadline: "+this.deadline+ " Link: "+this.link);
  }




  name: string;
  weight: number;
  moduleCode: string;
  deadline: string;
  link:string;
  type: string;
}

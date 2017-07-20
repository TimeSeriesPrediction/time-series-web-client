export class Assessment {

  constructor(name: string, weight: number, moduleId: number){
    this.name = name;
    this.weight = weight;
    this.moduleId = moduleId;
  }

  name: string;
  weight: number;
  moduleId: number;
}

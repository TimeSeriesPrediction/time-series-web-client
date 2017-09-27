export class Mark{

  constructor(userId?: String, assessmentId?: String, finalResult?: Number) {
    this.userId = userId;
    this.assessmentId = assessmentId;
    this.finalResult = finalResult;
  }

  userId: String;
  assessmentId: String;
  questionResults: Object[];
  finalResult: Number;
}

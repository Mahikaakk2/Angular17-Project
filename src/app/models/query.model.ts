export class Query {
  queryId: number;
  queryText: string;
  responseText: string;
  newJoinerId: number;
  mentorId: number;
  courseId: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  status: boolean;

  constructor(
    queryId: number,
    queryText: string,
    responseText: string,
    newJoinerId: number,
    mentorId: number,
    courseId: number,
    createdAt: Date,
    createdBy: string,
    updatedAt: Date,
    updatedBy: string,
    status: boolean
  ) {
    this.queryId = queryId;
    this.queryText = queryText;
    this.responseText = responseText;
    this.newJoinerId = newJoinerId;
    this.mentorId = mentorId;
    this.courseId = courseId;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.updatedAt = updatedAt;
    this.updatedBy = updatedBy;
    this.status = status;
  }
}

import { IAnswerOptions } from "./AnswerOptions";

export interface IQuestion {
  question: string;
  answers: IAnswerOptions[];
}

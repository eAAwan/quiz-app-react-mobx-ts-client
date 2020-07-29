import { IAnswerOptions } from "./AnswerOptions";

export interface IQuestion {
  id: number;
  question: string;
  type: string;
  options: IAnswerOptions;
}

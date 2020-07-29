import * as React from "react";
import { TransitionGroup } from "react-transition-group";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";
import ResultCount from "./ResultCount";

interface IProps {
  currentpoints: number;
  answer: string;
  answerOptions: [];
  question: string;
  questionId: number;
  questionTotal: number;
  onAnswerSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Quiz(props: IProps) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.points.toString()}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <TransitionGroup
      className="container"
      component="div"
      transitionname="fade"
      transitionentertimeout={800}
      transitionleavetimeout={500}
      transitionappear={"true"}
      transitionappeartimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <ResultCount points={props.currentpoints} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map((item) => renderAnswerOptions(item))}
        </ul>
      </div>
    </TransitionGroup>
  );
}

import * as React from "react";

interface IQuestionCount {
  counter: number;
  total: number;
}

export default function QuestionCount(props: IQuestionCount) {
  return (
    <div className="questionCount">
      <span>{props.counter}</span> / <span>{props.total}</span>
    </div>
  );
}

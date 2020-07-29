import * as React from "react";

interface IProps {
  key: string;
  answerType?: string;
  questionId: number;
  answer?: string;
  value?: boolean;
  answerContent: string;
  onAnswerSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AnswerOption(props: IProps) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={false}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}

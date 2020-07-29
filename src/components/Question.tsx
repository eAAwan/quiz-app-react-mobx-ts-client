import * as React from "react";

interface IProps {
  content: string;
}

export default function Question(props: IProps) {
  return <h2 className="question">{props.content}</h2>;
}

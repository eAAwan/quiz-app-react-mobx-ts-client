import * as React from "react";
import { TransitionGroup } from "react-transition-group";

interface IProps {
  name: string;
  currentPoint: number;
  totalPoints: number;
}

export default function Result(props: IProps) {
  const { name, currentPoint, totalPoints } = props;
  return (
    <TransitionGroup
      className="container result"
      component="div"
      transitionname="fade"
      transitionentertimeout={800}
      transitionleavetimeout={500}
      transitionappear={"true"}
      transitionappeartimeout={500}
    >
      <div>Thanks you {name}!!</div>
      <div>
        You scored {currentPoint} points out of {totalPoints} possible
      </div>
    </TransitionGroup>
  );
}

import * as React from "react";

interface IResultCount {
  points: number;
}

export default function ResultCount(props: IResultCount) {
  return (
    <div className="resultCount">
      Points so far <span>{props.points}</span>
    </div>
  );
}

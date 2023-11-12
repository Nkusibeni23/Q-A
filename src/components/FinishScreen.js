import React from "react";

export default function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage >= 80) {
    emoji = "🥇";
  } else if (percentage >= 60) {
    emoji = "🥈";
  } else if (percentage >= 40) {
    emoji = "🥉";
  } else {
    emoji = "🤷‍♂️";
  }
  return (
    <>
      <p className="result">
        {emoji} You Scored <strong>{points}</strong> Out Of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={() => window.location.reload()}>
        Restart Quiz!
      </button>

      {/* <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz!
      </button> */}
    </>
  );
}

import React, { Fragment, useState } from "react";
import App from "../App";

const Result = ({ score, questions }) => {
  const [rest, setRest] = useState(false);
  const restartQuizHandler = () => {
    setRest(true);
  };
  return (
    <div className="w-[900px] h-[300px]  flex flex-col justify-center items-center bg-gray-500">
      {rest ? (
        <App />
      ) : (
        <Fragment>
          <div className="mb-10 text-[22px]">
            Your Score Is <span className="font-bold">{score} </span>
            from {questions.length}!
          </div>
          <button
            onClick={restartQuizHandler}
            className="bg-white py-2 px-8 rounded-[10px] cursor-pointer text-[18px]"
          >
            Restart
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default Result;

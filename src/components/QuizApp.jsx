import React, { useState } from "react";
import Answer from "./Answer";

const QuizApp = ({ showScore, questions, scored }) => {
  const [currentQues, serCurrentQues] = useState(0);
  const [score, setScore] = useState(0);

  console.log(questions[currentQues].answers);

  const answerClickHandler = (answer) => {
    const newQuesNum = currentQues + 1;

    if (newQuesNum < questions.length) {
      serCurrentQues(newQuesNum);
    } else {
      showScore(true);
    }

    if (answer === questions[currentQues].right_answer) {
      const newScore = score + 1;
      setScore(newScore);
      scored(newScore);
    }
  };

  return (
    <div className="w-[900px] h-[300px]  flex flex-row justify-center items-start bg-gray-500">
      <div className="flex flex-col max-w-[400px] text-start justify-start items-start p-3 mt-5">
        <div className="text-[#f6f6f6] font-bold text-[22px]">
          Questions: {currentQues + 1} / <span>{questions.length}</span>
        </div>
        <div className="font-normal text-[18px] mt-2">
          {questions[currentQues].title}
        </div>
      </div>
      <div className=" mt-5 flex-1 ">
        {questions[currentQues].answers.map((answer, index) => {
          return (
            <Answer
              key={index}
              answer={answer.answer}
              clicked={() => answerClickHandler(answer.answer)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuizApp;

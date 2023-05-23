import { useState } from "react";
import "./App.css";
import QuizApp from "./components/QuizApp";
import Result from "./components/Result";

function App() {
  const questions = [
    {
      title: "What is Nader's first name?",
      answers: [
        { answer: "Nader" },
        { answer: "Mohammed" },
        { answer: "Ahmed" },
        { answer: "Yosef" },
      ],
      right_answer: "Mohammed",
    },
    {
      title: "What is Nader's favourite color?",
      answers: [
        { answer: "Blue" },
        { answer: "Red" },
        { answer: "Black" },
        { answer: "White" },
      ],
      right_answer: "Black",
    },
    {
      title: "How old is Nader?",
      answers: [
        { answer: "Nader is 20 years old" },
        { answer: "Nader is 21 years old" },
        { answer: "Nader is 22 years old" },
        { answer: "Nader is 19 years old" },
      ],
      right_answer: "Nader is 21 years old",
    },
    {
      title: "What is Nader's field of education?",
      answers: [
        { answer: "Software Engineer" },
        { answer: "Program Engineer" },
        { answer: "Infromation technology" },
        { answer: "Networking Engineer" },
      ],
      right_answer: "Software Engineer",
    },
    {
      title: "What is Nader's most played game?",
      answers: [
        { answer: "Call of duty" },
        { answer: "Minecraft" },
        { answer: "Valorant" },
        { answer: "League of Legends" },
      ],
      right_answer: "League of Legends",
    },
  ];

  // Get A Random Question Every Time The Quiz Is Taken
  // for (let i = questions.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   const temp = questions[i];
  //   questions[i] = questions[j];
  //   questions[j] = temp;
  // }

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const scoreHandler = (score) => {
    setScore(score);
  };

  const showScoreHandler = (show) => {
    setShowScore(show);
  };
  return (
    <div className="App h-screen flex flex-row items-center justify-center">
      {showScore ? (
        <Result questions={questions} score={score} />
      ) : (
        <QuizApp
          questions={questions}
          showScore={showScoreHandler}
          scored={scoreHandler}
        />
      )}
    </div>
  );
}

export default App;

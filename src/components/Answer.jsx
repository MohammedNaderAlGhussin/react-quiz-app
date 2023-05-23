import React from "react";

const Answer = ({ answer, clicked }) => {
  return (
    <div
      onClick={clicked}
      className="w-[400px] bg-blue-500 mx-auto py-2 rounded-[7px] cursor-pointer text-[#f6f6f6] text-[19px] border-2 border-blue-900 mb-3"
    >
      {answer}
    </div>
  );
};

export default Answer;

import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const AskAQuestion = () => {
  return (
    <>
      <div>
        <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

        <QuestionForm />
      </div>
    </>
  );
};

export default AskAQuestion;

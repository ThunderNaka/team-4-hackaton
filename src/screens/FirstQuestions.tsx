import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "~/components/MainLayout";
import { getQuestions } from "~/utils/getQuestions";
import { ROUTES } from "../router/routes";

export function FirstQuestions() {
  const navigate = useNavigate();
  const questions = getQuestions();
  console.log(questions);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const question = questions[currentQuestion];

  const handleAnswer = () => {
    if (currentQuestion === questions.length - 1) {
      navigate(ROUTES.patientDashboard);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  return (
    <MainLayout>
      <div className="flex h-full flex-col gap-8">
        <div
          className="flex min-h-[183px] flex-col items-start justify-center rounded-b-[5rem] bg-gradient-to-t from-blue-100 to-blue-200 p-8 pl-12"
          style={{
            backgroundImage: "url('/images/tree.svg')",
          }}
        />
        <div className="flex w-full flex-col gap-8 px-6">
          <h1 className="text-center text-2xl font-semibold">
            {question.question}
          </h1>
          <div className="flex flex-col gap-4">
            {question.answers.map((answer, j) => (
              <button
                onClick={handleAnswer}
                key={j}
                className="flex w-full flex-row items-center justify-start gap-2 rounded-xl bg-white p-4 text-lg shadow-strong"
              >
                <h1 className="text-2xl">{answer.emoji}</h1>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

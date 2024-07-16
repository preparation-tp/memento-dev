import { useState } from "react";
import clsx from "clsx";

type QuizAnswer = {
  value: string;
  label: string;
};

type QuizProps = {
  question: string;
  answers: QuizAnswer[];
  correctAnswer: string;
  children: React.ReactNode;
};

type QuizQuestionProps = {
  question: string;
};

type QuizAnswerProps = {
  answer: QuizAnswer;
  correctAnswer: string;
  selectedAnswer: string | null;
  setSelectedAnswer: (answer: string) => void;
};

type QuizAnswersProps = {
  selectedAnswer: string | null;
  correctAnswer: string;
  answers: QuizAnswer[];
  setSelectedAnswer: (answer: string) => void;
};

type QuizResultProps = {
  children: React.ReactNode;
  correctAnswer: string;
  selectedAnswer: string | null;
};

const Quiz = (props: QuizProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  return (
    <div>
      <QuizQuestion {...props} />
      <QuizAnswers
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        {...props}
      />
      <QuizResult selectedAnswer={selectedAnswer} {...props} />
    </div>
  );
};

const QuizQuestion = (props: QuizQuestionProps) => {
  return (
    <strong className="flex items-center gap-2">
      <svg
        stroke="currentColor"
        fill="currentColor"
        className="shrink-0 h-6 w-6"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 19C12.8284 19 13.5 19.6716 13.5 20.5C13.5 21.3284 12.8284 22 12 22C11.1716 22 10.5 21.3284 10.5 20.5C10.5 19.6716 11.1716 19 12 19ZM12 2C15.3137 2 18 4.68629 18 8C18 10.1646 17.2474 11.2907 15.3259 12.9231C13.3986 14.5604 13 15.2969 13 17H11C11 14.526 11.787 13.3052 14.031 11.3989C15.5479 10.1102 16 9.43374 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H6V8C6 4.68629 8.68629 2 12 2Z"></path>
      </svg>

      {props.question}
    </strong>
  );
};

const QuizAnswer = (props: QuizAnswerProps) => {
  const handleAnswerClick = () => {
    if (props.selectedAnswer === props.answer.label) {
      props.setSelectedAnswer(null);
      return;
    }

    props.setSelectedAnswer(props.answer.label);
  };

  return (
    <button
      onClick={handleAnswerClick}
      className={clsx(
        "!mt-0",
        "p-2",
        "border",
        "rounded-md",
        "cursor-pointer",
        "transition-colors",
        { "border-gray-300 dark:border-gray-500": !props.selectedAnswer },
        {
          "hover:border-gray-500 dark:hover:border-gray-400":
            !props.selectedAnswer,
        },
        {
          "hover:bg-gray-50 dark:hover:bg-gray-800": !props.selectedAnswer,
        },
        {
          "border-green-500":
            props.selectedAnswer && props.correctAnswer === props.answer.label,
        },
        {
          "border-red-500":
            props.selectedAnswer && props.correctAnswer !== props.answer.label,
        },
        {
          "bg-green-100 dark:bg-green-900":
            props.selectedAnswer &&
            props.correctAnswer === props.answer.label &&
            props.selectedAnswer === props.answer.label,
        },
        {
          "bg-red-100 dark:bg-red-900":
            props.selectedAnswer &&
            props.correctAnswer !== props.answer.label &&
            props.selectedAnswer === props.answer.label,
        }
      )}
    >
      <span className="font-bold">{props.answer.label}</span> -{" "}
      {props.answer.value}
    </button>
  );
};

const QuizResult = (props: QuizResultProps) => {
  if (!props.selectedAnswer) return null;

  return (
    <div className="mt-4 flex flex-col gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
      <p className="font-bold text-lg">
        {props.selectedAnswer === props.correctAnswer
          ? "Correct !"
          : "Incorrect !"}
      </p>
      {props.children}
    </div>
  );
};

const QuizAnswers = (props: QuizAnswersProps) => {
  return (
    <div className="flex flex-wrap gap-4 items-stretch no-mt">
      {props.answers.map((answer) => (
        <QuizAnswer
          key={answer.value}
          answer={answer}
          correctAnswer={props.correctAnswer}
          selectedAnswer={props.selectedAnswer}
          setSelectedAnswer={props.setSelectedAnswer}
        />
      ))}
    </div>
  );
};

export default Quiz;

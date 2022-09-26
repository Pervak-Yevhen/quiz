import React, { useContext } from 'react';
import { IQuestion } from "../types";

export interface IQuizScoreContext {
    list: IQuestion[],
    questionIndex: number;
}

const QuizScoreContext = React.createContext<IQuizScoreContext>({
  list: [],
  questionIndex: 0,
});

export const useQuizScoreContext = () => useContext(QuizScoreContext);

export default QuizScoreContext;

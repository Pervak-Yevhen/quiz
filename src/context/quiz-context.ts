import React, { useContext } from 'react';
import { IQuestion } from "../types";

export interface IQuizContext {
    item: IQuestion;
    selectedItemIndex: number | null;
    wrongAnswerSelected: boolean;
    onItemClick: (index:number) => void;
}

const QuizContext = React.createContext<IQuizContext>({
  item: {
    answer: [0],
    variants: [],
    question: '',
    prize: 0,
  },
  selectedItemIndex: null,
  onItemClick: () => {},
  wrongAnswerSelected: false
});

export const useQuizContext = () => useContext(QuizContext);

export default QuizContext;

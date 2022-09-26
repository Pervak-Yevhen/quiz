import React, { useContext } from 'react';

export interface IQuizResultContext {
    gameStarted: boolean;
    end: boolean;
    prize: number;
    onRestart: () => void;
    onStart: () => void;
}

const QuizResultContext = React.createContext<IQuizResultContext>({
  gameStarted: false,
  end: false,
  prize: 0,
  onRestart: () => {},
  onStart: () => {},
});

export const useQuizResultContext = () => useContext(QuizResultContext);

export default QuizResultContext;

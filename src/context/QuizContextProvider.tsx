import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import QuizContext, { IQuizContext } from "./quiz-context";
import QuizResultContext, { IQuizResultContext } from "./quiz-result-context";
import QuizScoreContext, { IQuizScoreContext } from "./quiz-score-context";
import { ROOT_ROUTE } from '../router/routes';

import list from '../static/index.json';

interface IQuizContextProviderProps {
    children: React.ReactNode[] | React.ReactNode;
}

interface IQuizContextProviderState {
    prize: number;
    questionIndex: number;
    selectedItemIndex: number | null;
    wrongAnswerSelected: boolean;
    disabled: boolean;
    end: boolean;
    gameStarted: boolean;
}

const DEFAULT_STATE = {
  prize: 0,
  questionIndex: 0,
  selectedItemIndex: null,
  wrongAnswerSelected: false,
  disabled: false,
  end: false,
  gameStarted: false,
};

const QuizContextProvider = ({ children }: IQuizContextProviderProps) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const [state, setState] = useState<IQuizContextProviderState>(() => ({...DEFAULT_STATE}));

  const navigate = useNavigate();
  useEffect(() => {
    if (timer) clearTimeout(timer);
    if (state.end) navigate(ROOT_ROUTE)
    // eslint-disable-next-line
    }, [state.disabled, state.end]);

  const onRestart = () => setState({...DEFAULT_STATE, gameStarted: true})

  const onStart = () => setState((prevState) => ({ ...prevState, gameStarted: true }));

  const onItemClick = (index: number) => {
    const { disabled } = state;
    const { answer } = list[state.questionIndex];

    if (disabled) return;
    setState((prevState) => ({
      ...prevState,
      disabled: true,
      selectedItemIndex: index,
      wrongAnswerSelected: !answer.includes(index),
    }));

    timer = setTimeout(() => {
      setState((prevState) => {
        const { questionIndex, wrongAnswerSelected } = prevState;
        const next = questionIndex + 1;
        const isEnd = next === list.length || wrongAnswerSelected;

        if (wrongAnswerSelected) {
          return {
            ...prevState,
            disabled: false,
            wrongAnswerSelected: false,
            prize: list[questionIndex - 1]?.prize || 0,
            questionIndex: 0,
            selectedItemIndex: null,
            end: isEnd
          }
        }

        return {
          ...prevState,
          disabled: false,
          prize: list[questionIndex].prize,
          questionIndex: isEnd ? questionIndex : next,
          end: isEnd,
          wrongAnswerSelected: false,
          selectedItemIndex: null,
        };
      })
    }, 1000);
  };

  const quizContextValue: IQuizContext = {
    item: list[state.questionIndex],
    selectedItemIndex: state.selectedItemIndex,
    wrongAnswerSelected: state.wrongAnswerSelected,
    onItemClick,
  };

  const scoreContextValue: IQuizScoreContext = {
    list,
    questionIndex: state.questionIndex
  };

  const resultContextValue: IQuizResultContext = {
    gameStarted: state.gameStarted,
    end: state.end,
    prize: state.prize,
    onRestart,
    onStart,
  };

  return (
    <QuizContext.Provider value={quizContextValue} >
      <QuizScoreContext.Provider value={scoreContextValue}>
        <QuizResultContext.Provider value={resultContextValue}>
          { children }
        </QuizResultContext.Provider>
      </QuizScoreContext.Provider>
    </QuizContext.Provider>
  );
}


export default QuizContextProvider;

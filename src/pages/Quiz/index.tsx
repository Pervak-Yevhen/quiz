import React, { useState, useEffect } from 'react';
import cn from "classnames";
import Item from '../../componets/List/Item';
import List from '../../componets/List';
import ScorePanel from "../../componets/ScorePanel";
import { useQuizContext } from "../../context/quiz-context";
import { useQuizScoreContext } from "../../context/quiz-score-context";
import { useResizeContext } from "../../context/resize-context";

import './index.css'

const Quiz = () => {
  const [showPanel, setState] = useState(false);
  const {
    item: { question, variants, answer },
    onItemClick,
    wrongAnswerSelected,
    selectedItemIndex,
  } = useQuizContext();

  const { list, questionIndex } = useQuizScoreContext();
  const isMobile = useResizeContext();
  const onShowPanel = () => setState(!showPanel);
  useEffect(() => {
    if (isMobile) setState(false);
    else setState(true);
  }, [isMobile]);

  const button = (
    <button
      className={cn('Quiz__button', {
        "Quiz__button--active": showPanel
      })}
      onClick={onShowPanel}
    />
  );

  const checkIsRight = (index: number):boolean => {
    const selected = index === selectedItemIndex;
    let isRight = false;
    if (selectedItemIndex != null) isRight = answer.includes(selectedItemIndex) && selected;
    return isRight || (wrongAnswerSelected && answer.includes(index));
  };

  return (
    <div className="Quiz">
      { isMobile && button }
      <div className="Quiz__content">
        <h2 className="Quiz__content-title">{question}</h2>
        <List>
          {
            variants.map((text: string, i: number) => {
              const selected = i === selectedItemIndex;
              return (
                <Item
                  key={i}
                  selected={selected}
                  right={checkIsRight(i)}
                  wrong={selected && wrongAnswerSelected}
                  text={text}
                  onItemClick={() => onItemClick(i)}
                  withAlphabeticCount
                />
              );
            })
          }
        </List>
      </div>
      <div className={cn('Quiz__panel', {
        'Quiz__panel--show': showPanel && isMobile,
      })}
      >
        <ScorePanel list={list} currentItem={questionIndex} />
      </div>
    </div>
  );
}

export default Quiz;

import React from 'react';
import cn from "classnames";
import { useQuizResultContext } from "../../context/quiz-result-context";
import Button from "../../componets/Button";

import { QUIZ_ROUTE } from '../../router/routes';

import Hand from '../../assets/hand.png';
import Hand2x from '../../assets/hand2x.png';
import HandMob from '../../assets/hand_mobile.png';
import HandMob2x from '../../assets/hand_mobile@2x.png';

import './index.css';

const Home = () => {
  const { end: quizEnd,  prize, onRestart, onStart } = useQuizResultContext();
  const start =
        <>
          <span className="Home__content-description-text">Who wants to be a millionaire?</span>
          <Button
            to={QUIZ_ROUTE}
            text="Start"
            onClick={onStart}
          />
        </>;
  const end =
        <>
          <div className="Home__content-description-header">
            <span className="Home__content-description-title">Total score:</span>
            <span className="Home__content-description-text">
              {`$${prize} earned`}
            </span>
          </div>
          <Button
            to={QUIZ_ROUTE}
            text="Try again"
            onClick={onRestart}
          />
        </>;
  return (
    <div className={cn('Home', { 'Home--end': quizEnd })}>
      <div className="Home__content">
        <picture className="Home__content-picture">
          <source media="(max-width: 760px)" srcSet={HandMob} />
          <source media="(max-width: 760px)" srcSet={`${HandMob2x} 2x`} />
          <img
            className="Home__content-img"
            src={Hand}
            srcSet={`${Hand2x} 2x`}
            alt="hand"
          />
        </picture>
        <div className="Home__content-description">
          {quizEnd ? end : start}
        </div>
      </div>
    </div>
  );
}

export default Home;

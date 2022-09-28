import React from 'react';

import List from "../List";
import Item from "../List/Item";
import { IQuestion } from "../../types";

import './index.css';

interface IScorePanel {
    list: IQuestion[];
    currentItem: number;
}

const ScorePanel = ({ list, currentItem }: IScorePanel) => {
  return (
    <div className="ScorePanel">
      <List column>
        {
          list.map(({ prize }, i) => {
            return <Item
              prefix="$"
              key={prize}
              text={`${prize}`}
              selected={currentItem === i}
              achieved={currentItem > i}
              small
            />
          })
        }
      </List>
    </div>
  );
};

ScorePanel.propTypes = {

};

export default ScorePanel;

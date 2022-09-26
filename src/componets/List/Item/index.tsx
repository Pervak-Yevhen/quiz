import React from 'react';
import cn from 'classnames'

import './index.css';

interface IItem {
    text: string;
    small?: boolean;
    onItemClick?: () => void;
    selected?: boolean;
    achieved?: boolean;
    wrong?: boolean;
    right?: boolean;
    prefix?: string;
    withAlphabeticCount?: boolean;
}

const Item = ({ text, wrong, right, selected, onItemClick, small, achieved, prefix, withAlphabeticCount }: IItem) => {
  return (
    <li className={cn('Item', {
      'Item--small': small,
      'Item--selected': selected,
      'Item--achieved': achieved,
      'Item--right': right,
      'Item--wrong': wrong,
    })}>
      <div
        className="Item__content"
        onClick={onItemClick}
      >
        <span className={cn('Item__content-text', {
          "Item__content-text--alphabet": withAlphabeticCount
        })}>{prefix}{text}</span>
      </div>
    </li>
  );
}

export default Item;

import React from 'react';
import cn from 'classnames';

import './index.css'

interface IList {
    children: React.ReactNode[] | React.ReactNode;
    column?: boolean;
}
class List extends React.Component<IList> {
  render() {
    const { children, column } = this.props;
    return (
      <ul className={cn('List', {
        'List--column': column
      })}
      >
        {children}
      </ul>
    );
  }
}

export default List;

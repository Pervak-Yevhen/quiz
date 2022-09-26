import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css'

interface IButton {
    text: string;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick, to = '' }: IButton): JSX.Element => {
  return (
    <NavLink to={to} className="Button__link">
      <button
        className="Button"
        onClick={onClick}
      >
        {text}
      </button>
    </NavLink>
  );
}

export default Button;

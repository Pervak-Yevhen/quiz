import React from 'react';
import { useNavigate } from "react-router-dom";

import './index.css'

interface IButton {
    text: string;
    to?: string;
    onClick?: () => void;
}

const Button = ({ text, onClick, to }: IButton): JSX.Element => {
  const navigate = useNavigate();
  const click = () => {
    if (to) navigate(to);
    if (onClick) onClick();
  }
  return (
    <button
      className="Button"
      onClick={click}
    >
      {text}
    </button>
  );
}

export default Button;

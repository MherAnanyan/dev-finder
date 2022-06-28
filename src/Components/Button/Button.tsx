import React from 'react';

import './style.scss';

type ButtonProps = {
  title: string;
  onClick: () => void;
};
export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <div className="btn-wrapper">
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

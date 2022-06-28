import React, { ChangeEvent } from 'react';

import './style.scss';

type InputProps = {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errMsg?: string;
  onEnter?: () => void;
};

export const TextInput: React.FC<InputProps> = ({
  placeholder,
  onChange,
  errMsg,
  onEnter,
}) => {
  const message = errMsg && <p className="err-msg">{errMsg}</p>;
  const onKeyDown = (event: any) => {
    if (event.key === 'Enter' && onEnter) {
      onEnter();
    }
  };
  return (
    <div className="input-wrapper">
      <input
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        onChange={onChange}
      />
      {message}
    </div>
  );
};

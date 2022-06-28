import React, { useState } from 'react';
import { TextInput } from '../../Components/TextInput/TextInput';
import { Button } from '../../Components/Button/Button';
import SearchIcon from '../../resources/icons/IconSearch';

import './style.scss';

type SearchBarProps = {
  setSearchText: (value: string) => void;
  errMsg: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  setSearchText,
  errMsg,
}) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e?.target.value);
  };
  const onSearch = () => {
    inputValue && setSearchText(inputValue);
  };

  return (
    <div className="searchBar-wrapper">
      <div className="searchBar-content">
        <SearchIcon />
        <TextInput
          placeholder="Search GITHUB username..."
          onChange={onChangeHandler}
          errMsg={errMsg}
          onEnter={onSearch}
        />
        <Button title="Search" onClick={onSearch} />
      </div>
    </div>
  );
};

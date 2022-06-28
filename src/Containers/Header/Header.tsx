import React from 'react';
import { DARK_MODE, LIGHT_MODE } from '../../constant';
import { IconMoon, IconSun } from '../../resources/icons';

import './style.scss';

type props = {
  handleModeChange: () => void;
  mode: string | null;
};

export const Header = ({ handleModeChange, mode }: props) => {
  const isDarkMode = mode === DARK_MODE;
  const currentModeIcon = isDarkMode ? <IconSun /> : <IconMoon />;
  const currentModeTitle = isDarkMode ? LIGHT_MODE : DARK_MODE;

  return (
    <div className="header-area">
      <h1 className="header-titel">devfinder</h1>
      <div onClick={handleModeChange} className="mode-switcher-btn">
        <p>{currentModeTitle}</p>
        {currentModeIcon}
      </div>
    </div>
  );
};

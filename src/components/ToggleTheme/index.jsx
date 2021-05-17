import React from 'react'

import { ToggleButton, ToggleContainer } from './style.styled';

import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer>
      <ToggleButton lightTheme={isLight} onClick={toggleTheme}>
        <SunIcon />
        <MoonIcon />
      </ToggleButton>
    </ToggleContainer>
  );
};

export default Toggle;
import React from 'react';

import Home from './views/Home/index.jsx';
import Topbar from './components/Topbar/index.jsx';

import { useDarkMode } from './theme/useDarkMode';
import { GlobalStyles } from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';

function App() {

  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <Topbar theme={theme} toggleTheme={toggleTheme} />
      <Home theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
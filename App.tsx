import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import Home from './src/pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content'></StatusBar>
      <Home></Home>
    </ThemeProvider>

  );
};

export default App;

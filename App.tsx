import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import Home from './src/pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>

  );
};

export default App;

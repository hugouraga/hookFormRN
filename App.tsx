import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import Home from './src/pages/Home';
import StackRoutes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle='light-content'></StatusBar>
        <StackRoutes />
      </ThemeProvider>
    </NavigationContainer>


  );
};

export default App;

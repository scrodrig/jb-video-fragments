import React, { Component } from 'react';
import { ThemeProvider } from '@rmwc/theme';
import Home from './components/home/Home';
import colors from './style/colors';
import 'material-icons/iconfont/material-icons.scss';
import GlobalProvider from './context/GlobalProvider';

class App extends Component {
  render() {
    return (
      <ThemeProvider options={{
        primary: colors.primary800,
        secondary: colors.secondary500,
        onPrimary: colors.primary400,
        textPrimaryOnBackground: colors.black,
      }}
      >
        <GlobalProvider>
          <Home />
        </GlobalProvider>
      </ThemeProvider>
    );
  }
}

export default App;

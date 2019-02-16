import React, { Component } from 'react';
import { ThemeProvider } from '@rmwc/theme';
import Home from './components/Home/Home';
import colors from './style/colors';

class App extends Component {
  render() {
    return (
      <ThemeProvider options={{
        primary: colors.primary800,
        secondary: colors.secondary500,
        onPrimary: colors.primary600,
        textPrimaryOnBackground: colors.black,
      }}
      >
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;

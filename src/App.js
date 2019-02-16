import React, { Component } from 'react';
import { ThemeProvider } from '@rmwc/theme';
import Home from './components/Home/Home';
import colors from './style/colors';

class App extends Component {
  render() {
    return (
      <ThemeProvider options={{
        primary: colors.primary600,
        secondary: colors.secondary500,
        onPrimary: colors.primary800,
        textPrimaryOnBackground: colors.black,
      }}
      >
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

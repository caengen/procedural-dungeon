import React, { Component } from 'react';
import { RandomWalk } from "src/components";
import { StyledApp, GlobalStyle } from './App.style';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <RandomWalk />
      </StyledApp>
    );
  }
}

export default App;

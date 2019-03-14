import React, { Component } from 'react';
import { Dungeon } from "src/components";
import { StyledApp, GlobalStyle } from './App.style';

class App extends Component {
  render() {
    const testCells = [
      [1, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
    ];

    return (
      <StyledApp>
        <GlobalStyle />
        <Dungeon cells={testCells} />
      </StyledApp>
    );
  }
}

export default App;

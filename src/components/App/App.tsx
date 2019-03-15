import React, { Component } from 'react';
import { Dungeon } from "src/components";
import { StyledApp, GlobalStyle } from './App.style';
import { randomWalk } from 'src/generation';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <Dungeon matrix={randomWalk({
          dimensions: 20,
          tunnelLength: 6,
          tunnels: 50
        })} />
      </StyledApp>
    );
  }
}

export default App;

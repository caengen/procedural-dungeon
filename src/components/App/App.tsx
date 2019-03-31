import React, { Component } from "react";
import { RandomWalk } from "src/components";
import { StyledApp, GlobalStyle } from "./App.style";
import { DungeonSelector } from "../DungeonSelector";

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <RandomWalk />
        <DungeonSelector onSelected={() => null} />
      </StyledApp>
    );
  }
}

export default App;

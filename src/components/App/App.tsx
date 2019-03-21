import React, { Component } from "react";
import { RandomWalk, Dungeon } from "src/components";
import { StyledApp, GlobalStyle } from "./App.style";
import { roomPlacement } from "src/generation/roomPlacement";

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <RandomWalk />
        <hr />
        <Dungeon
          matrix={roomPlacement({
            dimensions: 15,
            rooms: 10,
            roomWidth: 4,
            roomHeight: 4
          })}
        />
      </StyledApp>
    );
  }
}

export default App;

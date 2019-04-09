import React, { Component, useState } from "react";
import { RandomWalk } from "src/components";
import { StyledApp, GlobalStyle } from "./App.style";
import { DungeonSelector } from "../DungeonSelector";
import { DungeonSelection } from "src/types";
import { RoomPlacement } from "../RoomPlacement";

function getDungeon(type: DungeonSelection) {
  switch (type) {
    case "RoomPlacement":
      return <RoomPlacement />;
    case "RandomWalk":
    default:
      return <RandomWalk />;
  }
}

function App() {
  const [selected, updateSelected] = useState<DungeonSelection>("RandomWalk");

  const dungeon = getDungeon(selected);

  return (
    <StyledApp>
      <GlobalStyle />
      {dungeon}
      <DungeonSelector onSelected={updateSelected} />
    </StyledApp>
  );
}

export default App;

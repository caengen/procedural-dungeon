import React, { useState } from "react";
import { RandomWalkInputs } from "./RandomWalkInputs";
import { RandomWalkParams } from "src/types";
import { Dungeon } from "src/components";
import { randomWalk } from "src/generation";
import { StyledRandomWalk } from "./RandomWalk.styles";

interface State extends RandomWalkParams {}

export default function RandomWalk() {
  const [state, updateState] = useState<State>({
    dimensions: 15,
    tunnels: 50,
    maxTunnelLength: 6
  });
  const [map, updateMap] = useState<number[][]>(randomWalk(state));
  const handleClick = () => updateMap(randomWalk(state));

  return (
    <StyledRandomWalk onClick={handleClick}>
      <RandomWalkInputs onChange={updateState} />
      <Dungeon matrix={map} />
    </StyledRandomWalk>
  );
}

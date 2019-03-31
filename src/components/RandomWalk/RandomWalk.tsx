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
    <section>
      <h1>Random walk</h1>
      <RandomWalkInputs onChange={updateState} />
      <Dungeon onClick={handleClick} matrix={map} />
    </section>
  );
}

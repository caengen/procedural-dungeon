import React, { useState } from 'react';
import {RandomWalkInputs} from './RandomWalkInputs';
import { RandomWalkParams } from 'src/types';
import { Dungeon } from 'src/components';
import { randomWalk } from 'src/generation';

interface State extends RandomWalkParams{
}

export default function RandomWalk() {
  const [state, updateState] = useState<State>({
    dimensions: 20,
    tunnels: 50,
    maxTunnelLength: 6
  });

  return (
    <div>
      <RandomWalkInputs onChange={updateState} />
      <Dungeon matrix={randomWalk(state)} />
    </div>
  );
}

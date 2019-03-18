import React, {useState,ChangeEvent} from 'react';
import { RandomWalkParams } from 'src/types';

export interface RandomWalkInputsProps {
  onChange?: (params: RandomWalkParams) => void;
}

interface State extends RandomWalkParams { }

export default function RandomWalkInputs(props: RandomWalkInputsProps) {
  const [state, updateState] = useState<State>({
    dimensions: 20,
    tunnels: 50,
    maxTunnelLength: 6
  });

  const updateInput = (key: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    updateState({
      ...state, 
      [key]: event.target.value
    });
    props.onChange && props.onChange(state);
  }

  return (
    <div>
      <input type="number" name="dimensions" value={state.dimensions} onChange={updateInput("dimensions")} />
      <input type="number" name="tunnels" value={state.tunnels} onChange={updateInput("tunnels")} />
      <input type="number" name="tunnel length" value={state.maxTunnelLength} onChange={updateInput("maxTunnelLength")} />
    </div>
  );
}

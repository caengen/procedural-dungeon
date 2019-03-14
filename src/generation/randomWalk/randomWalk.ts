import { createMatrix } from "../createMatrix";

export interface RandomWalkParams {
  dimensions: number;
  tunnels: number;
  tunnelLength: number;
}
export default function randomWalk(params: RandomWalkParams) {
  const { dimensions, tunnels, tunnelLength } = params;
  const matrix = createMatrix(dimensions, dimensions);

  let lastDirection = undefined;
  
  const startRow = Math.round(Math.random() * dimensions);
  const startCol = Math.round(Math.random() * dimensions);

  for (let i = tunnels; i > 0; i--) {
    
  }
  
  return [[]];
}
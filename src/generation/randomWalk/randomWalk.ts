import { createMatrix } from "../createMatrix";
import { Directions } from "src/types";

export interface RandomWalkParams {
  dimensions: number;
  tunnels: number;
  tunnelLength: number;
}
export default function randomWalk(params: RandomWalkParams) {
  const { dimensions, tunnels, tunnelLength } = params;
  const matrix = createMatrix(dimensions, dimensions);

  let lastDirection = undefined;
  
  // Initialise random position
  let currRow = Math.floor(Math.random() * dimensions);
  let currCol = Math.floor(Math.random() * dimensions);

  for (let i = tunnels; i > 0; i--) {
    const direction = nextDirection(lastDirection);

    for (let j = 0; j < tunnelLength; j++) {
      console.log(`matrix[${currRow}][${currCol}] = 0;`);
      matrix[currRow][currCol] = 0;
      const { nextRow, nextCol, outOfBounds } = nextPosition({ currRow, currCol, direction, maxDimension: dimensions });
      
      if (outOfBounds) {
        break;
      } else {
        currRow = nextRow;
        currCol = nextCol;
      }
    }

    lastDirection = direction;
  }
  
  return matrix;
}

/**
 * TODO: Må og ta hensyn til array out of bounds og tidligere traverserte på direction
 * @param lastDirection 
 */
function nextDirection(lastDirection?: number[]) {
  let direction = undefined;
  do {
    direction = Directions[Math.floor(Math.random() * Directions.length)];
  } while (direction === lastDirection);

  return direction;
}

interface NextPositionParams {
  currRow: number;
  currCol: number;
  direction: number[];
  maxDimension: number;
}
function nextPosition(params: NextPositionParams) {
  const { currRow, currCol, direction, maxDimension } = params;
  const [ rowModifier, colModifier ] = direction;
  
  const nextRow = currRow + rowModifier;
  const nextCol = currCol + colModifier;
  
  let outOfBounds = (
    nextRow < 0 || nextRow >= maxDimension ||
    nextCol < 0 || nextCol >= maxDimension
  );
  
  return {
    nextRow,
    nextCol,
    outOfBounds
  };
}
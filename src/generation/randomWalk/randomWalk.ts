import { createMatrix } from "../createMatrix";
import { Directions } from "src/types";
import { without } from "lodash";

export interface RandomWalkParams {
  dimensions: number;
  tunnels: number;
  tunnelLength: number;
}
export default function randomWalk(params: RandomWalkParams) {
  const { dimensions, tunnels, tunnelLength } = params;
  const map = createMatrix(dimensions, dimensions);

  let lastDirection = undefined;
  
  // Initialise random position
  let currRow = Math.floor(Math.random() * dimensions);
  let currCol = Math.floor(Math.random() * dimensions);

  for (let i = tunnels; i > 0; i--) {
    const direction = nextDirection({ lastDirection });

    for (let j = 0; j < tunnelLength; j++) {
      map[currRow][currCol] = 0;
      const { nextRow, nextCol, collision } = nextPosition({ currRow, currCol, direction, map, maxDimension: dimensions });
      
      if (collision) {
        break;
      } else {
        currRow = nextRow;
        currCol = nextCol;
      }
    }

    lastDirection = direction;
  }
  
  return map;
}

interface NextDirectionParams {
  lastDirection?: number[];
}
function nextDirection(params: NextDirectionParams) {
  const { lastDirection } = params;
  let direction = undefined;
  const validDirections = excludeSameAndOppositeDirections(lastDirection);

  direction = validDirections[Math.floor(Math.random() * validDirections.length)];

  return direction;
}

function excludeSameAndOppositeDirections(direction?: number[]) {
  if (!direction) {
    return Directions;
  }

  const opposite = direction.map(d => d < 0 ? Math.abs(d) : -d);
  const excluded = without(Directions, direction, opposite);

  return excluded;
}

interface NextPositionParams {
  currRow: number;
  currCol: number;
  direction: number[];
  map: number[][];
  maxDimension: number;
}
function nextPosition(params: NextPositionParams) {
  const { currRow, currCol, map, direction, maxDimension } = params;
  const [ rowModifier, colModifier ] = direction;
  
  const nextRow = currRow + rowModifier;
  const nextCol = currCol + colModifier;
  
  let outOfBounds = (
    nextRow < 0 || nextRow >= maxDimension ||
    nextCol < 0 || nextCol >= maxDimension
  );

  let alreadyTraversed = outOfBounds ? false : map[nextRow][nextCol] === 0;
  
  return {
    nextRow,
    nextCol,
    collision: outOfBounds || alreadyTraversed
  };
}
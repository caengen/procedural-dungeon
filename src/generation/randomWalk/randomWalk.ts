import { createMap, excludeSameAndOppositeDirections } from "src/generation";

export interface RandomWalkParams {
  dimensions: number;
  tunnels: number;
  maxTunnelLength: number;
}
export default function randomWalk(params: RandomWalkParams) {
  const { dimensions, tunnels, maxTunnelLength } = params;
  const map = createMap(dimensions, dimensions);

  let lastDirection = undefined;
  let tunnelsLeft = tunnels;
  // Initialise random position
  let currRow = Math.floor(Math.random() * dimensions);
  let currCol = Math.floor(Math.random() * dimensions);

  while (tunnelsLeft > 0) {
    let direction = nextDirection({ lastDirection });

    let tunneled = 0;
    let tunnelLength = Math.ceil(Math.random() * maxTunnelLength);
    while (tunneled < tunnelLength) {
      map[currRow][currCol] = 0;
      tunneled++;

      const { nextRow, nextCol, collision } = nextPosition({ currRow, currCol, direction, map, maxDimension: dimensions });
      
      if (collision) {
        break;
      } else {
        currRow = nextRow;
        currCol = nextCol;
      }
    }

    lastDirection = direction;
    tunnelsLeft--;
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
  
  let outOfBounds = isOutOfBounds(nextRow, nextCol, maxDimension);
  
  return {
    nextRow,
    nextCol,
    collision: outOfBounds
  };
}

function isOutOfBounds(row: number, col: number, maxDimension: number) {
  return (
    row < 0 || row >= maxDimension ||
    col < 0 || col >= maxDimension
  );
}
export function isOutOfBounds(row: number, col: number, maxDimension: number) {
  return row < 0 || row >= maxDimension || col < 0 || col >= maxDimension;
}

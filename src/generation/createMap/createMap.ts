import { MapType } from "src/types";

export default function createMap(rows: number, columns: number) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      row.push(MapType.wall);
    }
    matrix.push(row);
  }

  return matrix;
}
export default function createMatrix(rows: number, columns: number) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      row.push(1);
    }
    matrix.push(row);
  }

  return matrix;
}
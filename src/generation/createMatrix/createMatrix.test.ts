import createMatrix from "./createMatrix";

it("should create a two dimensional array from params", () => {
  const matrix = createMatrix(5, 5);

  expect(matrix).toEqual(
    [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ]
  );
});
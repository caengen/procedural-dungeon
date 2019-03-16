import { Direction } from "src/types";
import excludeSameAndOppositeDirections from "./excludeSameAndOppositeDirections";

it("should filter horisontal directions correctly", () => {
  const result = excludeSameAndOppositeDirections(Direction.Left);
  expect(result).toEqual([
    Direction.Up,
    Direction.Down
  ]);
});

it("should filter vertical directions correctly", () => {
  const result = excludeSameAndOppositeDirections(Direction.Up);
  expect(result).toEqual([
    Direction.Left,
    Direction.Right
  ]);
});
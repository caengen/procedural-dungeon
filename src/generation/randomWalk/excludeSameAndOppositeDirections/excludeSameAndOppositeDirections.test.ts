import { Direction } from "src/types";
import excludeSameAndOppositeDirections from "./excludeSameAndOppositeDirections";

it("should filter horisontal directions correctly", () => {
  const result = excludeSameAndOppositeDirections(Direction.left);
  expect(result).toEqual([
    Direction.up,
    Direction.down
  ]);
});

it("should filter vertical directions correctly", () => {
  const result = excludeSameAndOppositeDirections(Direction.up);
  expect(result).toEqual([
    Direction.left,
    Direction.right
  ]);
});
import {createMap} from "src/generation";
import { MapType } from "src/types";

it("should create a two dimensional array from params", () => {
  const matrix = createMap(5, 5);

  const w = MapType.wall;
  expect(matrix).toEqual(
    [
      [w, w, w, w, w],
      [w, w, w, w, w],
      [w, w, w, w, w],
      [w, w, w, w, w],
      [w, w, w, w, w]
    ]
  );
});
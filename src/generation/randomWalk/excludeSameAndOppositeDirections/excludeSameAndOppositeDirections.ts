import { Directions } from "src/types";
import { filter, isEqual } from "lodash";
import { flipPlusMinus } from "src/helpers";

export default function excludeSameAndOppositeDirections(direction?: number[]) {
  if (!direction) {
    return Directions;
  }

  const opposite = direction.map(flipPlusMinus);
  const excluded = filter(
    Directions,
    d => !(isEqual(d, direction) || isEqual(d, opposite))
  );

  return excluded;
}

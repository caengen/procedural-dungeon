import styled, { css } from "styled-components";
import { Colors } from "src/types";

interface GridProps {
  dimensions: number;
}
export const Grid = styled.div<GridProps>`
  background-color: ${Colors.Stone.Lightest};
  display: grid;
  ${p =>
    css`
      grid-template-columns: repeat(${p.dimensions}, 2em);
    `}
  ${p =>
    css`
      grid-template-rows: repeat(${p.dimensions}, 2em);
    `}
  width: min-content;
`;

interface CellProps {
  isWall?: boolean;
}
export const Cell = styled.div<CellProps>`
  color: ${Colors.Stone.Dark};
  display: flex;
  justify-content: center;
  align-items: center;
  ${p =>
    p.isWall
      ? css`
          background-color: ${Colors.Stone.Dark};
          color: ${Colors.Stone.Base};
        `
      : ""}
`;

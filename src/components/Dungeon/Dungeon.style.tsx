import styled, { css } from "styled-components";
import { Colors } from "src/types";

interface GridProps {
  dimensions: number;
  mini?: boolean;
}

const getGridTemplateSize = (mini?: boolean) => (mini ? ".1em" : "2em");

export const Grid = styled.div<GridProps>`
  background-color: ${Colors.Stone.Lightest};
  display: grid;
  cursor: pointer;
  user-select: none;
  ${p =>
    css`
      grid-template-columns: repeat(
        ${p.dimensions},
        ${getGridTemplateSize(p.mini)}
      );
    `}
  ${p =>
    css`
      grid-template-rows: repeat(
        ${p.dimensions},
        ${getGridTemplateSize(p.mini)}
      );
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

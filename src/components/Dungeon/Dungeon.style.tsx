import styled, { css } from "styled-components";

interface GridProps {
  dimensions: number;
}
export const Grid = styled.div<GridProps>`
  background-color: green;
  display: grid;
  ${p => css`grid-template-columns: repeat(${p.dimensions}, 2em);`}
  ${p => css`grid-template-rows: repeat(${p.dimensions}, 2em);`}
  width: min-content;
`;

interface CellProps {
  isWall?: boolean;
}
export const Cell = styled.div<CellProps>`
  ${p => p.isWall ? css`background-color: orange;` : ""}
  display: flex;
  justify-content: center;
  align-items: center;
`;
import styled, { css } from "styled-components";

interface GridProps {
  dimensions: number;
}
export const Grid = styled.div<GridProps>`
  background-color: #6F7B7E;
  display: grid;
  ${p => css`grid-template-columns: repeat(${p.dimensions}, 2em);`}
  ${p => css`grid-template-rows: repeat(${p.dimensions}, 2em);`}
  width: min-content;
`;

interface CellProps {
  isWall?: boolean;
}
export const Cell = styled.div<CellProps>`
  color: #1C2224;
  display: flex;
  justify-content: center;
  align-items: center;
  ${p => p.isWall ? css`
    background-color: #1C2224;
    color: #3A4548;
  ` : ""}
`;
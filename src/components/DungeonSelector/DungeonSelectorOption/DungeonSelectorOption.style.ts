import styled, { css } from "styled-components";
import { Colors } from "src/types";

interface StyledDungeonSelectorOptionProps {
  isSelected?: boolean;
}
export const StyledDungeonSelectorOption = styled.div<{ isSelected?: boolean }>`
  display: flex;
  padding: 1em;
  flex-direction: row;
  ${p =>
    p.isSelected &&
    css`
      background-color: blue;
    `}
  border: 1px solid ${Colors.Stone.Base};
  border-radius: 6px;
  margin: 0.5em 0;

  input {
    display: none;
  }

  label {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Icon = styled.img`
  width: 1.5em;
`;

export const Title = styled.strong`
  margin-left: 1em;
`;

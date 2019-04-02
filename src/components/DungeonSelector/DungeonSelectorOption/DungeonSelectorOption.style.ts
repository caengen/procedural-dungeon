import styled from "styled-components";
import { Colors } from "src/types";

export const StyledDungeonSelectorOption = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${Colors.Stone.Base};
  border-radius: 6px;
  margin: 0.5em 0;

  input {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 1.5em;
`;

export const Title = styled.strong`
  margin-left: 1em;
`;

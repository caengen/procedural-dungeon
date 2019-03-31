import styled from "styled-components";
import { Colors } from "src/types";

export const StyledDungeonSelectorOption = styled.li`
  display: flex;
  padding: 1em;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${Colors.Stone.Base};
  border-radius: 6px;
`;

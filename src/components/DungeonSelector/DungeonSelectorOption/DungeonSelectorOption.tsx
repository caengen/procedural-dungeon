import React from "react";
import { Dungeon } from "src/components";
import { Option } from "../DungeonSelector.types";
import { StyledDungeonSelectorOption } from "./DungeonSelectorOption.style";

export default function DungeonSelectorOption(props: { option: Option }) {
  const { option } = props;

  return (
    <StyledDungeonSelectorOption>
      <Dungeon mini matrix={option.example} />
      <strong>{option.type}</strong>
    </StyledDungeonSelectorOption>
  );
}

import React from "react";
import { Dungeon } from "src/components";
import { Option } from "../DungeonSelector.types";
import {
  StyledDungeonSelectorOption,
  Icon,
  Title
} from "./DungeonSelectorOption.style";

export default function DungeonSelectorOption(props: { option: Option }) {
  const { option } = props;

  return (
    <StyledDungeonSelectorOption>
      <input
        id={option.key}
        type="radio"
        name="dungeon_selection"
        value={option.type}
      />
      <label htmlFor={option.key}>
        <Icon src={option.icon} alt={option.type} />
        <Title>{option.type}</Title>
      </label>
    </StyledDungeonSelectorOption>
  );
}

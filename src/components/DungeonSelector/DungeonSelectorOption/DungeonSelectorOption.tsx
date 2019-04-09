import React from "react";
import { Option } from "../DungeonSelector.types";
import {
  StyledDungeonSelectorOption,
  Icon,
  Title
} from "./DungeonSelectorOption.style";
import { DungeonSelection } from "src/types";

export interface DungeonSelectorOptionProps {
  option: Option;
  onSelected: (value: DungeonSelection) => void;
  isSelected?: boolean;
}

export default function DungeonSelectorOption(
  props: DungeonSelectorOptionProps
) {
  const { option, isSelected, onSelected } = props;

  const handleClick = () => {
    if (!isSelected) {
      onSelected(option.type);
    }
  };

  return (
    <StyledDungeonSelectorOption isSelected={isSelected}>
      <input
        id={option.key}
        type="radio"
        name="dungeon_selection"
        value={option.type}
        onClick={handleClick}
      />
      <label htmlFor={option.key}>
        <Icon src={option.icon} alt={option.type} />
        <Title>{option.type}</Title>
      </label>
    </StyledDungeonSelectorOption>
  );
}

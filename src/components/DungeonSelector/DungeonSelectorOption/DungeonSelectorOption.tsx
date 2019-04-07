import React from "react";
import { Option, DungeonSelection } from "../DungeonSelector.types";
import {
  StyledDungeonSelectorOption,
  Icon,
  Title
} from "./DungeonSelectorOption.style";

export interface DungeonSelectorOptionProps {
  option: Option;
  onSelected: React.Dispatch<DungeonSelection>;
  isSelected?: boolean;
}

export default function DungeonSelectorOption(
  props: DungeonSelectorOptionProps
) {
  const { option, isSelected, onSelected } = props;

  const handleChange = () => {
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
        onClick={handleChange}
      />
      <label htmlFor={option.key}>
        <Icon src={option.icon} alt={option.type} />
        <Title>{option.type}</Title>
      </label>
    </StyledDungeonSelectorOption>
  );
}

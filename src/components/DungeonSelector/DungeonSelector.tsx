import React, { useState } from "react";
import uuidv4 from "uuid/v4";
import { List } from "./DungeonSelector.style";
import { DungeonSelectorOption } from "./DungeonSelectorOption";
import { Option } from "./DungeonSelector.types";
import walkIcon from "src/assets/walk.svg";
import randomIcon from "src/assets/random.svg";
import { DungeonSelection } from "src/types";

export interface DungeonSelectorProps {
  onSelected: (selected: DungeonSelection) => void;
}

const options: Option[] = [
  {
    key: uuidv4(),
    type: "RandomWalk",
    icon: walkIcon
  },
  {
    key: uuidv4(),
    type: "RoomPlacement",
    icon: randomIcon
  }
];

export default function DungeonSelector(props: DungeonSelectorProps) {
  const [selected, updateSelected] = useState<DungeonSelection>("RandomWalk");

  const handleSelected = (selected: DungeonSelection) => {
    updateSelected(selected);
    props.onSelected(selected);
  };

  return (
    <div>
      <List>
        {options.map(o => (
          <DungeonSelectorOption
            isSelected={selected === o.type}
            onSelected={handleSelected}
            key={o.key}
            option={o}
          />
        ))}
      </List>
    </div>
  );
}

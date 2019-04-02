import React, { useState } from "react";
import uuidv4 from "uuid/v4";
import { randomWalk } from "src/generation";
import { List } from "./DungeonSelector.style";
import { DungeonSelectorOption } from "./DungeonSelectorOption";
import { DungeonSelection, Option } from "./DungeonSelector.types";

export interface DungeonSelectorProps {
  onSelected: (selected: DungeonSelection) => void;
}

const options: Option[] = [
  {
    key: uuidv4(),
    type: "RandomWalk",
    example: randomWalk({ dimensions: 20, maxTunnelLength: 6, tunnels: 50 })
  },
  {
    key: uuidv4(),
    type: "RoomPlacement",
    example: randomWalk({ dimensions: 20, maxTunnelLength: 6, tunnels: 50 })
  }
];

export default function DungeonSelector(props: DungeonSelectorProps) {
  const [selected, updateSelected] = useState<DungeonSelection>("RandomWalk");

  return (
    <div>
      <List>
        {options.map(o => (
          <DungeonSelectorOption key={o.key} option={o} />
        ))}
      </List>
    </div>
  );
}

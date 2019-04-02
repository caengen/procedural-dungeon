export interface Option {
  key: string;
  type: DungeonSelection;
  icon: string;
}

export type DungeonSelection = "RandomWalk" | "RoomPlacement";

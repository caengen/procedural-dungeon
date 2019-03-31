export interface Option {
  key: string;
  type: DungeonSelection;
  example: number[][];
}

export type DungeonSelection = "RandomWalk" | "RoomPlacement";

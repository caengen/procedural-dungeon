import React from "react";
import { Grid, Cell } from "./Dungeon.style";
import { MapType } from "src/types";

export interface DungeonProps {
  matrix: number[][];
}

export default class Dungeon extends React.Component<DungeonProps> {
  public render() {
    const { matrix } = this.props;
    return (
      <Grid dimensions={matrix.length}>{matrix.map(this.renderCellRow)}</Grid>
    );
  }

  private renderCellRow = (row: number[]) => row.map(this.renderCell);

  private renderCell = (cell: number, row: number) => (
    <Cell key={`${row}${cell}`} isWall={cell === MapType.wall}>
      <code>{cell}</code>
    </Cell>
  );
}

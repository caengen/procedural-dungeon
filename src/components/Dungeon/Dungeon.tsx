import React from "react";
import { Grid, Cell } from "./Dungeon.style";
import { MapType } from "src/types";

export interface DungeonProps {
  matrix: number[][];
  onClick?: () => void;
  mini?: boolean;
}

export default class Dungeon extends React.Component<DungeonProps> {
  public render() {
    const { matrix, onClick, mini } = this.props;
    return (
      <Grid mini={mini} onClick={onClick} dimensions={matrix.length}>
        {matrix.map(this.renderCellRow)}
      </Grid>
    );
  }

  private renderCellRow = (row: number[]) => row.map(this.renderCell);

  private renderCell = (cell: number, row: number) => (
    <Cell key={`${row}${cell}`} isWall={cell === MapType.wall}>
      <code>{cell}</code>
    </Cell>
  );
}

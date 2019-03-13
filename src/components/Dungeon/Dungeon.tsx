import * as React from 'react';
import { Grid, Cell } from './Dungeon.style';

export interface DungeonProps {
  level: number[][];
}

const testCells = [
  [1, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
];

export default class Dungeon extends React.Component<DungeonProps> {
  public render() {

    const cells = testCells;
    return (
      <Grid dimensions={cells.length}>
        {cells.map(this.renderCellRow)}
      </Grid>
    );
  }

  private renderCellRow = (row: number[]) => row.map(this.renderCell);
  private renderCell = (cell: number) => (
    <Cell isWall={!!cell}>
      <code>{cell}</code>
    </Cell>
  )
}

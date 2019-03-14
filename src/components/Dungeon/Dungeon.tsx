import * as React from 'react';
import { Grid, Cell } from './Dungeon.style';

export interface DungeonProps {
  cells: number[][];
}

export default class Dungeon extends React.Component<DungeonProps> {
  public render() {
    const { cells: level } = this.props;
    return (
      <Grid dimensions={level.length}>
        {level.map(this.renderCellRow)}
      </Grid>
    );
  }

  private renderCellRow = (row: number[]) => row.map(this.renderCell);
  
  private renderCell = (cell: number, row: number) => (
    <Cell key={`${row}${cell}`} isWall={!!cell}>
      <code>{cell}</code>
    </Cell>
  )
}

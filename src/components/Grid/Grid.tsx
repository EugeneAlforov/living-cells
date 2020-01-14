import React from 'react';
import Cell from '../Cell/Cell';

type CellValue = number;

type Props = {
  cells: CellValue[][];
}

export default function Grid(props: Props) {
  const { cells } = props;

  return (<div className="grid">
    {
      cells.map((rowCells, rowIndex) =>
        <div className="row" key={rowIndex}>
          { rowCells.map((value, columnIndex) => {
              return <Cell isAlive={!!value} key={`${rowIndex}-${columnIndex}`} />
            })
          }
        </div>
      )
    }
  </div>);
}

export const willCellLive = (cells: number[][], row: number, column: number): number => {
  const value = cells[row][column];
  const cellsOnPreviousRow = (cells[row - 1] || [])
    .slice(column - 1, column + 2);
  const cellsOnCurrentRow = cells[row].slice(column - 1, column + 2);
  const cellsOnNextRow = (cells[row + 1] || []).slice(column - 1, column + 2);

  const aliveCellsAround = [...cellsOnPreviousRow, ...cellsOnCurrentRow, ...cellsOnNextRow]
    .reduce((sum, v) => sum + v, 0) - value;

  if (value) {
    if (aliveCellsAround < 2 || aliveCellsAround > 3) { return 0; }
    return 1;
  }

  if (!value) {
    return aliveCellsAround === 3 ? 1 : 0;
  }

  return 0;
};

export const getNextTick = function (cells: number[][]): number[][] {
  return cells.map((rowCells, rowIndex) =>
    rowCells.map((value, columnIndex) =>
      willCellLive(cells, rowIndex, columnIndex))
  );
};

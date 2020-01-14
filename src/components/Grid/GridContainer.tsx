import React, { useState  } from 'react';
import Grid from './Grid';
import { getNextTick } from '../../utils/compute-cells';
import { useInterval } from '../../utils/use-interval';

const HEIGHT = 50;
const WIDTH = 50;
const initGrid = () => {
  return Array.from(Array(HEIGHT))
    .map(() => Array.from(Array(WIDTH))
      .map(() =>
        Math.round(Math.random()))
    );
};

const TICK_TIME = 400;
export default function GridContainer() {
  const [cells, setCells] = useState(initGrid());

  useInterval(() => {
    const newCells = getNextTick(cells);

    setCells(newCells);
  }, TICK_TIME);

  return (<Grid cells={cells} />)
}

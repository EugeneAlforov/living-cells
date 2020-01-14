import { willCellLive } from './compute-cells';

describe('willCellLive (middle one)', () => {
  it(`
  0 0 1
  0 1 1
  0 0 1
  should return 1`, () => {
    const cells = [
      [0, 0, 1],
      [0, 1, 1],
      [0, 0, 1]
    ];
    expect(willCellLive(cells, 1, 1)).toEqual(1);
  });
  it(`
  0 1 1
  0 1 0
  0 0 0
  should return 1`, () => {
    const cells = [
      [0, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ];
    expect(willCellLive(cells, 1, 1)).toEqual(1);
  });
  it(`
  0 1 0
  0 1 0
  0 0 0
  should return 1`, () => {
    const cells = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];
    expect(willCellLive(cells, 1, 1)).toEqual(0);
  });
  it(`
  1 1 x
  1 1 x
  x x x
  should return 1`, () => {
    const cells = [
      [1, 1],
      [1, 1]
    ];
    expect(willCellLive(cells, 1, 1)).toEqual(1);
  });
  it(`
  0 0 x
  1 1 x
  x x x
  should return 1`, () => {
    const cells = [
      [0, 0],
      [1, 1]
    ];
    expect(willCellLive(cells, 1, 1)).toEqual(0);
  });
  it(`
  0 0 x
  1 0 x
  x x x
  should return 1`, () => {
    const cells = [
      [0, 0],
      [1, 0]
    ];
    expect(willCellLive(cells, 1, 1)).toEqual(0);
  });
  it(`
  0 0 1
  0 0 1
  0 0 1
  should return 1`, () => {
    const cells = [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1]
    ];
    expect(willCellLive(cells, 1, 1)).toEqual(1);
  });
  it(`
  0 0 1
  0 0 0
  0 0 1
  should return 1`, () => {
    const cells = [
      [0, 0, 1],
      [0, 0, 0],
      [0, 0, 1]
    ];
    expect(willCellLive(cells, 1, 1)).toEqual(0);
  });
});

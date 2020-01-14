import React from 'react';

type Props = {
  isAlive: boolean
}

export default function Cell({ isAlive }: Props) {
  return (<div className={isAlive ? "live" : "dead"} />);
}

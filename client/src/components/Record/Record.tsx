import React from 'react';
import './Record.css';

interface Props {
  record: number;
}

export const Record: React.FC<Props> = ({ record }) => {
  return <div className="record">{record}</div>;
};

import React, { useContext } from 'react';
import './Record.css';
import { AppContext } from '../../api';

interface Props {
  record: Record<string, any>;
}

export const Record: React.FC<Props> = ({ record }) => {
  const context = useContext(AppContext);

  return (
    <div className="record">
      <b>{record.name}</b>
      <div className="price">$ {record.sum}</div>
      <ul>
        <li>📔 {context.category?.[record.category].name}</li>
        <li>🗓 {record.date}</li>
        <li>👱🏻 {context.user?.[record.user].name}</li>
        <li>📍 {context.place?.[record.place].name}</li>
      </ul>
    </div>
  );
};

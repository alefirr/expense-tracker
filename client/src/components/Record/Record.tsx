import React, { useContext } from 'react';
import './Record.css';
import { AppContext } from '../../api';

interface Props {
  record: Record<string, any>;
  onEditClick: () => void;
}

export const Record: React.FC<Props> = ({ record, onEditClick }) => {
  const context = useContext(AppContext);

  return (
    <div className="record">
      <b>{record.name}</b>
      <div className="price">$ {record.sum}</div>
      <ul>
        <li>📔 {context.mapById.category?.[record.category].name}</li>
        <li>🗓 {record.date}</li>
        <li>👱🏻 {context.mapById.user?.[record.user].name}</li>
        <li>📍 {context.mapById.place?.[record.place].name}</li>
      </ul>
      <button className="edit" onClick={onEditClick}>
        ✏️ Edit
      </button>
      <button className="delete">🗑 Delete</button>
    </div>
  );
};

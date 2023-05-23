import React from 'react';
import './RecordsList.css';
import { SumBanner } from '../SumBanner';
import { Record } from '../Record/Record';

export const RecordsList = () => {
  const records = [1, 2, 3, 4, 5];
  return (
    <div className="record-list-container">
      <SumBanner />
      <div className="record-list">
        {records.map(record => (
          <Record key={record} record={record} />
        ))}
      </div>
    </div>
  );
};

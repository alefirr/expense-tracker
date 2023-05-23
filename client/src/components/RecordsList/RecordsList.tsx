import React, { useContext } from 'react';
import './RecordsList.css';
import { SumBanner } from '../SumBanner';
import { Record } from '../Record/Record';
import { AppContext } from '../../api';

export const RecordsList = () => {
  const { record: records } = useContext(AppContext);

  return (
    <div className="record-list-container">
      <SumBanner />
      <div className="record-list">
        {records?.map(record => (
          <Record key={record._id} record={record} />
        ))}
      </div>
    </div>
  );
};

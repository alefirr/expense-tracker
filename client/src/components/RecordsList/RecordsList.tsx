import React, { useContext } from 'react';
import './RecordsList.css';
import { SumBanner } from '../SumBanner';
import { Record } from '../Record/Record';
import { AppContext } from '../../api';
import { Modal } from '../Modal';
import { Entity } from '../../types';

export const RecordsList = () => {
  const { record: records } = useContext(AppContext);

  const [recordInEdit, setRecordInEdit] = React.useState<string | null>(null);

  return (
    <div className="record-list-container">
      <SumBanner />
      <div className="record-list">
        {records?.map(record => (
          <Record
            key={record._id}
            record={record}
            onEditClick={() => {
              setRecordInEdit(record._id);
            }}
          />
        ))}
      </div>
      <Modal
        inEditId={recordInEdit}
        entity={recordInEdit ? Entity.Record : null}
        closeModal={() => {
          setRecordInEdit(null);
        }}
      />
    </div>
  );
};

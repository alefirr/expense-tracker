import React from 'react';
import { RecordsList } from '../RecordsList';
import { Statistics } from '../Statistics';
import { ControlBar } from '../ControlBar';
import { Modal } from '../Modal';
import { type Entity } from '../../types';
import './MainPage.css';

export const MainPage = () => {
  const [currentModal, setCurrentModal] = React.useState<Entity | null>(null);

  return (
    <div className="main-page-container">
      <div className="control-statistics-container">
        <Statistics />
        <ControlBar openModal={setCurrentModal} />
      </div>
      <RecordsList />
      <Modal
        entity={currentModal}
        closeModal={() => {
          setCurrentModal(null);
        }}
      />
    </div>
  );
};

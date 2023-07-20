import React, { useContext } from 'react';
import { RecordsList } from '../RecordsList';
import { Statistics } from '../Statistics';
import { ControlBar } from '../ControlBar';
import { Modal } from '../Modal';
import { type Entity } from '../../types';
import { DataInput } from '../Modal/DataInput';
import { AppContext } from '../../api';
import { CURRENCIES } from '../../constants';
import './MainPage.css';

interface MainPageProps {
  setContext: (context: any) => void;
}

const currencyOptions = CURRENCIES.map(currency => ({
  value: currency,
  label: currency,
}));

export const MainPage: React.FC<MainPageProps> = ({ setContext }) => {
  const [currentModal, setCurrentModal] = React.useState<Entity | null>(null);
  const currentCurrency = useContext(AppContext).currentCurrency;

  return (
    <div className="main-page-container">
      <div className="control-statistics-container">
        <Statistics />
        <ControlBar openModal={setCurrentModal} />
      </div>
      <RecordsList />
      <DataInput
        id="currentCurrency"
        type="select"
        value={currentCurrency}
        setData={setContext}
        options={currencyOptions}
      />
      <Modal
        entity={currentModal}
        closeModal={() => {
          setCurrentModal(null);
        }}
      />
    </div>
  );
};

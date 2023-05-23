import React, { useContext, useEffect } from 'react';
import './Modal.css';
import { type Entity } from '../../types';
import { AppContext } from '../../api';
import { INPUTS } from '../../constants';
import { DataInput } from './DataInput';

interface Props {
  entity: Entity | null;
  closeModal: () => void;
  inEditId?: string | null;
}

export const Modal: React.FC<Props> = ({ entity, closeModal, inEditId }) => {
  const context = useContext(AppContext);

  const [data, setData] = React.useState({});

  useEffect(() => {
    if (entity && inEditId) {
      setData(context.mapById[entity]?.[inEditId]);
    }
  }, [inEditId, entity, context.mapById]);

  if (!entity) {
    return null;
  }

  const close = () => {
    closeModal();
  };

  return (
    <div className="bg">
      <div className="modal">
        <div className="modal-header">
          <h2>
            {inEditId ? 'Edit' : 'Add'} {entity}
          </h2>
          <button className="close-btn" onClick={close}>
            X
          </button>
          <div className="inputs">
            {INPUTS[entity].map(({ id, type, label }) => (
              <DataInput
                key={id}
                value={data[id as keyof typeof data]}
                setData={setData}
                id={id}
                type={type}
                label={label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useContext, useEffect } from 'react';
import './Modal.css';
import { type Entity } from '../../types';
import { AppContext, addData, updateData } from '../../api';
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
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    if (entity && inEditId) {
      setData(context.mapById[entity]?.[inEditId]);
    } else {
      setData({});
    }
  }, [inEditId, entity, context.mapById]);

  if (!entity) {
    return null;
  }

  const onSave = async () => {
    setIsLoading(true);

    if (inEditId) {
      await updateData(entity, inEditId, data);
    } else {
      await addData(entity, data);
    }
    setIsLoading(false);

    context.updateAllData?.();
    closeModal();
  };

  return (
    <div className="bg">
      <div className="modal">
        <div className="modal-header">
          <h2>
            {inEditId ? 'Edit' : 'Add'} {entity}
          </h2>
          <button className="close-btn" onClick={closeModal}>
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
          <button className="save-btn" onClick={onSave} disabled={isLoading}>
            {isLoading ? 'Loading...' : inEditId ? 'Save' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

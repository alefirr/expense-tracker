import React from 'react';
import './Modal.css';
import { type Entity } from '../../types';

interface Props {
  entity: Entity | null;
  closeModal: () => void;
  isEdit?: boolean;
}

export const Modal: React.FC<Props> = ({ entity, closeModal, isEdit }) => {
  if (!entity) {
    return null;
  }

  return (
    <div className="bg">
      <div className="modal">
        <div className="modal-header">
          <h2>
            {isEdit ? 'Edit' : 'Add'} {entity}
          </h2>
          <button className="close-btn" onClick={closeModal}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

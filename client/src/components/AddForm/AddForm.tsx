import React from 'react';
import './AddForm.css';
import { type Entity } from '../../types';

interface Props {
  entity: Entity;
  onClick: () => void;
}

export const AddForm: React.FC<Props> = ({ entity, onClick }) => {
  return (
    <div className="add-form-button" onClick={onClick}>
      Add {entity}
    </div>
  );
};

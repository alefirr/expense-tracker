import React, { type FC } from 'react';
import './ControlBar.css';
import { AddForm } from '../AddForm';
import { ENTITIES, type Entity } from '../../types';

interface Props {
  openModal: (entity: Entity) => void;
}

export const ControlBar: FC<Props> = ({ openModal }) => {
  return (
    <div className="control-bar">
      {ENTITIES.map(entity => (
        <AddForm
          entity={entity}
          key={entity}
          onClick={() => {
            openModal(entity);
          }}
        />
      ))}
    </div>
  );
};

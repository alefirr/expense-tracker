import React, { type FC } from 'react';
import './ControlBar.css';
import { AddForm } from '../AddForm';
import { Entity } from '../../types';

const entities = Object.values(Entity);

interface Props {
  openModal: (entity: Entity) => void;
}

export const ControlBar: FC<Props> = ({ openModal }) => {
  return (
    <div className="control-bar">
      {entities.map(entity => (
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

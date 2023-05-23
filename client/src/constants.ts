import { type DataInputProps } from './components/Modal/DataInput';
import { Entity } from './types';

export const ENTITIES = Object.values(Entity) as Entity[];

type Input = Omit<DataInputProps, 'setData' | 'value'>;

const DEFAULT_INPUTS: Input[] = [
  { id: 'name', type: 'text', label: 'Name' },
  { id: 'info', type: 'textarea', label: 'Info' },
];

export const INPUTS: Record<Entity, Input[]> = {
  [Entity.Record]: [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'date', type: 'date', label: 'Date' },
    { id: 'sum', type: 'number', label: 'Amount' },
    { id: 'category', type: 'select', label: 'Category' },
    { id: 'place', type: 'select', label: 'Place' },
    { id: 'user', type: 'select', label: 'User' },
  ],
  [Entity.Category]: DEFAULT_INPUTS,
  [Entity.User]: DEFAULT_INPUTS,
  [Entity.Place]: DEFAULT_INPUTS,
};

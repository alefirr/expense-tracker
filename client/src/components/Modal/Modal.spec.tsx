import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from './Modal';
import { Entity } from '../../types';

describe('Modal', () => {
  test('renders  when the entity is passed', () => {
    const rendered = render(
      <Modal entity={Entity.Record} closeModal={() => {}} />
    );

    expect(rendered.getByText('Name')).toBeTruthy();
  });

  test('does not render when the entity is not passed', () => {
    const rendered = render(<Modal entity={null} closeModal={() => {}} />);

    expect(() => rendered.getByText('Name')).toThrow();
  });
});

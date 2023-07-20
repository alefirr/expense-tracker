import React, { useContext } from 'react';
import './SumBanner.css';
import { AppContext } from '../../api';

export const SumBanner = () => {
  const { record: records } = useContext(AppContext);
  const total: number | undefined = records?.reduce(
    (acc, item) => acc + +item.sum,
    0
  );

  return (
    <div className="sum-banner">
      <h2>Total</h2>
      <h1>{total}$</h1>
    </div>
  );
};

// name: { type: String, required: true },
// date: { type: String, required: true },
// sum: { type: Number, required: true },
// category: { type: Schema.Types.ObjectId, ref: 'Category' },
// place: { type: Schema.Types.ObjectId, ref: 'Place' },
// user: { type: Schema.Types.ObjectId, ref: 'User' },

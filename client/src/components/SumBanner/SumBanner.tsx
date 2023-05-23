import React from 'react';
import './SumBanner.css';

export const SumBanner = () => {
  return (
    <div className="sum-banner">
      <h2>Total</h2>
      <h1>$0.00</h1>
    </div>
  );
};

// name: { type: String, required: true },
// date: { type: String, required: true },
// sum: { type: Number, required: true },
// category: { type: Schema.Types.ObjectId, ref: 'Category' },
// place: { type: Schema.Types.ObjectId, ref: 'Place' },
// user: { type: Schema.Types.ObjectId, ref: 'User' },

import mongoose, { Schema } from 'mongoose';

const RecordSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  sum: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  place: { type: Schema.Types.ObjectId, ref: 'Place' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Record', RecordSchema);

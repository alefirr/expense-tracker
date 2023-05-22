import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
  name: { type: String, required: true },
  info: { type: String, required: true },
  records: [{ type: Schema.Types.ObjectId, required: false, ref: 'Record' }],
});
export default mongoose.model('Category', CategorySchema);

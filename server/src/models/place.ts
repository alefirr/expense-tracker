import mongoose, { Schema } from 'mongoose';

const PlaceSchema = new Schema({
  name: { type: String, required: true },
  info: { type: String, required: true },
  records: [{ type: Schema.Types.ObjectId, ref: 'Record' }],
});

export default mongoose.model('Place', PlaceSchema);

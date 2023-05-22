import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  info: { type: String, required: true },
});
export default mongoose.model('User', UserSchema);

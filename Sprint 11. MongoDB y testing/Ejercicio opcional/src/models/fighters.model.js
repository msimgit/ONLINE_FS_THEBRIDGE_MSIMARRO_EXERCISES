import mongoose from 'mongoose';

const fighterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18 },
    country: { type: String, required: true, trim: true },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const Fighter = mongoose.model('Fighter', fighterSchema);

export default Fighter;
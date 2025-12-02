import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  platform: String,
  userId: String,
  lat: Number,
  lon: Number,
  type: String, // rain/traffic/earthquake
  threshold: Number,
  radius: Number,
  active: {type:Boolean, default:true},
  createdAt: {type:Date, default:Date.now}
});
export default mongoose.model('Subscription', schema);

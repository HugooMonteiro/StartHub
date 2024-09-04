import {Schema, model} from 'mongoose';

const StartupSchema = new Schema({
  name: String,
  city: String,
  state_code: String,
  category_code: String,
  founded_at: String,
  status: String,
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default model('Startup', StartupSchema);
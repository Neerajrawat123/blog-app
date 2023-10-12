/** @format */

import mongoose, { Schema,model } from 'mongoose';

const TokenSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
});

const Token = model('Token', TokenSchema);

export default Token;

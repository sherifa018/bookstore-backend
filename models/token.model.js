import mongoose from "mongoose";

const tokenSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.objectedId,
    required: true,
    ref: "User",
    unique: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});
//http://vers.com/userId/token
export const Token = mongoose.model("Token", tokenSchema);

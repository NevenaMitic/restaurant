import mongoose from "mongoose";

// Definišite šemu za korisnika
const userSchema = new mongoose.Schema({
  clerkId: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
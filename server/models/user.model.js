import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email : {
    type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    profilePicture: {
      type: String, // store image URL (S3, Cloudinary, etc.)
      default: "",
    },
    about: {
      type: String,
      default: "Hey there! I am using WhatsApp.",
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    lastSeen: {
      type: Date,
      default: Date.now,
    },
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);


export const User = mongoose.model("User", userSchema);

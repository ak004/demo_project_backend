import { Schema, model } from "mongoose";
import mongoose from "mongoose";
// Import the required modules
// import mongoose-sequence
import mongooseSequence from "mongoose-sequence";

// Create a user schema
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userRoleID: {
    type: Schema.Types.ObjectId,
    // required: true,
    default:null
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,

  },
  userContactNo: {
    type: String,
  },
 
 
  profile_image: {
    type: String,
    default: null,
  },
  user_type: {
    type: String,
    required: true,
  },
  status:{
    type: Number,
    default: 1
    },
  unique_id: Number,
},
{
    strict: true,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});

userSchema.plugin(mongooseSequence(mongoose), {
  id: "users",
  inc_field: "unique_id",
  start_seq: 1,
});

// Create and export the user model
export default model("User", userSchema);

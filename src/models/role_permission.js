import { Schema, model } from "mongoose";
import mongoose from "mongoose";
// Import the required modules
// import mongoose-sequence
import mongooseSequence from "mongoose-sequence";

// Create a user schema
const role_permission_Schema = new Schema({
  permission_name: {
    type: String,
    required: true,
  },
  allowed_objects: { type: Array, default: [] },
   
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

role_permission_Schema.plugin(mongooseSequence(mongoose), {
  id: "role_permission",
  inc_field: "unique_id",
  start_seq: 1,
});

// Create and export the user model
export default model("role_permission", role_permission_Schema);

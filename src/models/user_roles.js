import { Schema, model } from "mongoose";
import mongoose from "mongoose";
// Import the required modules
// import mongoose-sequence
import mongooseSequence from "mongoose-sequence";

// Create a user schema
const userRoleSchema = new Schema({
  role_name: {
    type: String,
    required: true,
  },
  permission_id: {
    type: Schema.Types.ObjectId,
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

userRoleSchema.plugin(mongooseSequence(mongoose), {
  id: "users_roles",
  inc_field: "unique_id",
  start_seq: 1,
});

// Create and export the user model
export default model("users_role", userRoleSchema);

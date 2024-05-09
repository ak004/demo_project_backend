import { Schema, model } from "mongoose";
import mongoose from "mongoose";
// Import the required modules
// import mongoose-sequence
import mongooseSequence from "mongoose-sequence";

// Create a user schema
const TariffCatagoriesSchema = new Schema({
  catagory_name: {
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

TariffCatagoriesSchema.plugin(mongooseSequence(mongoose), {
  id: "tariff_catagories",
  inc_field: "unique_id",
  start_seq: 1,
});

// Create and export the user model
export default model("tariff_catagories", TariffCatagoriesSchema);

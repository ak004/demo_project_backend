import { Schema, model } from "mongoose";
import mongoose from "mongoose";
// Import the required modules
// import mongoose-sequence
import mongooseSequence from "mongoose-sequence";

// Create a user schema
const indivdual_tax_payerSchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },
  data_of_birth: {
    type: Date,
    default: null,
  },
  national_id: {
    type: String,
    required: true,
    unique: true,
  },
  national_id_issue_date: {
    type: Date,
    default: null,
  },
  national_id_expiry_date: {
    type: Date,
    default: null,
  },
  passport_number: {
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

indivdual_tax_payerSchema.plugin(mongooseSequence(mongoose), {
  id: "indivdual_tax_payer",
  inc_field: "unique_id",
  start_seq: 1,
});

// Create and export the user model
export default model("indivdual_tax_payer", indivdual_tax_payerSchema);

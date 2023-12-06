import mongoose from "mongoose";


const userSchema = new mongoose.Schema(

  {
    username: {
      type: String,
      required: true, // Corregido de `require` a `required`
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: { // Corregido de `passworld` a `password`
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("User", userSchema);

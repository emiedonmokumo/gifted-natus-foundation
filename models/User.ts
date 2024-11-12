import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  bio: {
    firstName: string;
    lastName: string;
    othernames: string;
    title: string;
    email?: string;
    phone?: string;
    linkedIn?: string;
    X?: string;
    country: string;
    city: string;
    address: string;
  };
  credentials: {
    email: string;
    password: string;
  };
  role: string
}

const userSchema = new Schema<IUser>({
  bio: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    othernames: { type: String },
    title: { type: String, required: true },
    phone: { type: String, },
    linkedIn: { type: String },
    x: { type: String },
    country: { type: String },
    city: { type: String },
    address: { type: String },
  },
  credentials: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  role: { type: String, enum:["User", "Admin"], default: "User"}
}, { timestamps: true });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
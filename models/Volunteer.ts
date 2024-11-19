import mongoose, { Document, Model, Schema } from 'mongoose';

export interface VolunteerInterface extends Document {
    email: string;
    firstName: string;
    lastName: string;
    phone: number;
    address: string
}

const volunteerSchema = new Schema({
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
}, { timestamps: true })


const Volunteer: Model<VolunteerInterface> = mongoose.models.Volunteer || mongoose.model<VolunteerInterface>(
    'Volunteer',
    volunteerSchema
  );
  
  export default Volunteer;
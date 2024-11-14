import mongoose, { Document, Model, Schema } from 'mongoose';

export interface SubscriberInterface extends Document {
    user: mongoose.Schema.Types.ObjectId;
    email: string
}

const subscriberSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    email: { type: String, required: true }
}, { timestamps: true })


const Subscriber: Model<SubscriberInterface> = mongoose.models.Subscriber || mongoose.model<SubscriberInterface>(
    'Subscriber',
    subscriberSchema
  );
  
  export default Subscriber;
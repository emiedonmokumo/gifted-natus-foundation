import mongoose, { Document, Model, Schema } from 'mongoose';

export interface NewsLetterInterface extends Document {
    email: string
}

const newsletterSchema = new Schema({
    email: { type: String, required: true }
}, { timestamps: true })


const Newsletter: Model<NewsLetterInterface> = mongoose.models.Newsletter || mongoose.model<NewsLetterInterface>(
    'Newsletter',
    newsletterSchema
  );
  
  export default Newsletter;
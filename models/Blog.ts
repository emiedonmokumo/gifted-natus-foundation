import mongoose, { Document, Model, Schema } from 'mongoose';
import slugify from 'slugify';

// Define the Blog interface
export interface BlogInterface extends Document {
    user: mongoose.Schema.Types.ObjectId;
    title: string;
    slug: string;
    content: string;
    description: string;
    tags: string[];
    metaTitle?: string;
    metaDescription?: string;
    image?: string;
    altText?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Define the Blog schema
const blogSchema = new Schema<BlogInterface>(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        content: { type: String, required: true },
        description: { type: String, required: true },
        tags: { type: [String], required: true },
        metaTitle: { type: String },
        metaDescription: { type: String },
        image: { type: String },
        altText: { type: String }
    },
    { timestamps: true }
);

// Middleware to generate slug before saving
blogSchema.pre("save", function (next) {
    if (this.isModified("title")) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
    next();
});

// Create or reuse the Blog model
const Blog: Model<BlogInterface> = mongoose.models.Blog || mongoose.model<BlogInterface>("Blog", blogSchema);

export default Blog;

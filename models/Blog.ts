import mongoose, { Document, Model, Schema } from 'mongoose';
import slugify from 'slugify';

// Define the Blog interface
export interface BlogInterface extends Document {
    user: mongoose.Schema.Types.ObjectId;
    views: number;
    title: string;
    slug: string;
    content: string;
    description: string;
    tags: string[];
    metaTitle?: string;
    metaDescription?: string;
    img?: string;
    altText?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Define the Blog schema
const blogSchema = new Schema<BlogInterface>(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        img: { type: Number, default: 0 },
        views: { type: Number, default: 0 },
        title: { type: String, required: true },
        slug: { type: String, unique: true }, // Slug remains unique
        content: { type: String, required: true },
        description: { type: String, required: true },
        tags: { type: [String], required: true },
        metaTitle: { type: String },
        metaDescription: { type: String },
    },
    { timestamps: true }
);

// Middleware to generate a unique slug before saving
blogSchema.pre("save", async function (next) {
    if (this.isModified("title")) {
        let baseSlug = slugify(this.title, { lower: true, strict: true });
        let uniqueSlug = baseSlug;

        // Check for existing slugs and add a suffix if necessary
        let count = 1;
        while (await mongoose.models.Blog.exists({ slug: uniqueSlug })) {
            uniqueSlug = `${baseSlug}-${count}`;
            count++;
        }

        this.slug = uniqueSlug;
    }
    next();
});

// Create or reuse the Blog model
const Blog: Model<BlogInterface> = mongoose.models.Blog || mongoose.model<BlogInterface>("Blog", blogSchema);

export default Blog;

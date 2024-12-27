import mongoose from 'mongoose';

// Define your schema
const postSchema = new mongoose.Schema({
    account: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    },
    schedule: [
        {
            type: Date
        }
    ],
    data: {
        category: {
            type: String,
            required: true,
            trim: true
        },
        subCategory: {
            type: String,
            required: true,
            trim: true
        },
        postType: {
            type: String,
            required: true,
            trim: true,
            default: "offer"
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        images: [String],
        options: {
            type: Object
        }
    },
    failCount: {
        type: Number,
        default: 0,
    },
    failLog: [String],
});

// Check if model exists before defining it
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;

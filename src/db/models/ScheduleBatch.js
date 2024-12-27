import mongoose from 'mongoose';

// Define your batch schema
const scheduleBatchSchema = new mongoose.Schema({
    posts: [String],
    publishDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: [
            'pending', 'published', 'scheduled'
        ],
        default: 'scheduled'
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    },
});

// Check if model exists before defining it
const ScheduleBatch = mongoose.models.ScheduleBatch || mongoose.model(
    'ScheduleBatch',
    scheduleBatchSchema
);

export default ScheduleBatch;

import mongoose from 'mongoose';

// Define your schema
const OperationSchema = new mongoose.Schema({
	platform: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: [
			'pending', 'published', 'scheduled'
		],
		default: 'pending'
	},
	post: { type: String, required: true },
	account: {
		type: String,
	},
	queueNumber: {
		type: Number,
	},
});

// Check if model exists before defining it
const PostingData = mongoose.models.PostingData || mongoose.model('PostingData', OperationSchema);

export default PostingData;

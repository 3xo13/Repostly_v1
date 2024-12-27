import mongoose from 'mongoose';

// Define your batch schema
const BatchLogSchema = new mongoose.Schema({
		posts: [String],
		pending: [String],
		retry: [String],
		success: [String],
		fail: [String],
});

// Check if model exists before defining it
const CurrentBatchs = mongoose.models.CurrentBatchs || mongoose.model(
		'CurrentBatchs',
		BatchLogSchema
);

export default CurrentBatchs;

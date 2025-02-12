import mongoose from 'mongoose';

// Define your schema
const userLogSchema = new mongoose.Schema({
	user: {
		type: String,
		required: true
	},
	successfulPostCount: {
		type: Number,
		default: 0
	},
	failPostCount: {
		type: Number,
		default: 0
	},
	totalPostCount: {
		type: Number,
		default: 0
	},
	todayPosts: {
		totalPostCount: Number,
		successfulPostCount: Number,
		failPostCount: Number,
	},
});

// Check if model exists before defining it
const UserLog = mongoose.models.UserLog || mongoose.model('UserLog', userLogSchema);

export default UserLog;

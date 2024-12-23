import mongoose from 'mongoose';

// Define your schema
const OTPSchema = new mongoose.Schema({
	code: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now()
	},
	userId: {
		type: String,
		required: true,
		unique: true
	}
});

// Check if model exists before defining it
const OTP = mongoose.models.OTP || mongoose.model('OTP', OTPSchema);

export default OTP;

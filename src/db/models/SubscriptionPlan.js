import mongoose from 'mongoose';

// Define your schema
const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
				unique: true
    },
    startDate: {
        type: Date,
				default: Date.now(),
    },
    endDate: {
        type: Date
    },
    isRenewable: {
        type: Boolean
    },
    dailyCredit: {
        type: Number
    },
    credit: {
        type: Number
    },
    plan: {
        type: String,
        enum: [
            "free", "start", "advanced", "pro"
        ],
        default: "free"
    },
		
});

// Check if model exists before defining it
const Subscription = mongoose.models.Subscription || mongoose.model(
    'Subscription',
    subscriptionSchema
);

export default Subscription;

import mongoose from 'mongoose';

// Define your schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    OTP: {
        type: String
    },
    accounts: [String],
    authId: {
        type: String,
        required: true,
        unique: true
    },
    subscription: {
        type: String,
    }
});

// Check if model exists before defining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

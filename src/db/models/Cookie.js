import mongoose from "mongoose";

// Define your schema
const cookieSchema = new mongoose.Schema({
	data: { type: mongoose.Schema.Types.Mixed, required: true },
	userId: String
});

// Check if model exists before defining it
const Cookie = mongoose.models.Cookie || mongoose.model('Cookie', cookieSchema);

export {Cookie}

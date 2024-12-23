import mongoose from "mongoose";

// Define your schema
const JobOfferSchema = new mongoose.Schema({
	data: { type: mongoose.Schema.Types.Mixed, required: true },
	userId: String
});

// Check if model exists before defining it
const JobOffer = mongoose.models.JobOffer || mongoose.model('JobOffer', JobOfferSchema);

export {JobOffer}

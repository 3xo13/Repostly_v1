import mongoose from 'mongoose';

// Define your schema
const externalAccountSchema = new mongoose.Schema({
	createdAt: {
		type: Date,
		required: true,
		default: Date.now()
	},
	userId: {
		type: String,
		required: true,
		unique: true
	},
	platform: {
		type: String,
		required: true,
		default: "leboncoin"
	},
	webAddress: {
		type: String,
		required: true,
		default: "www.leboncoin.fr"
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	password: {
		type: String,
		required: true
	},
	cookies: [String],
	posts: [String],
	loggedIn: {
		type: Boolean,
		required: true,
		default: false
	}
});

// Check if model exists before defining it
const ExternalAccount = mongoose.models.ExternalAccount || mongoose.model('ExternalAccount', externalAccountSchema);

export default ExternalAccount;

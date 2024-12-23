import mongoose from 'mongoose';

// Define your schema
const postSchema = new mongoose.Schema({
	postingData: {
		type: String,
		required: true,
		unique: true
	},
	active: {
		type: Boolean,
		required: true,
		default: false
	},
	schedule: [
		{
			type: Date
		}
	],
	forms: [
		{
			title: {
				type: String,
				required: true,
				trim: true
			},
			description: {
				type: String,
				trim: true
			},
			price: {
				type: String,
				required: true
			},
			images: [String],
			options: {
				type: Object,
			}
		}
	]
});

// Check if model exists before defining it
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;

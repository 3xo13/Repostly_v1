import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import s3Client from "./s3Client";

const Bucket = process.env.S3_BUCKET;

const deleteFile = async (path) => {
	console.log("🚀 ~ deleteFile ~ path:", path)
	if (!path) return
	const urlParts = path.split('/');
	const Key = urlParts.slice(3).join('/');
	try {
		const params = {
			Bucket,
			Key,
		};
		const deleteCommand = new DeleteObjectCommand(params);

		try {
			await s3Client.send(deleteCommand);
			return true
		} catch (error) {
			console.error("Error deleting object:", error);
			return false;
		}
	} catch (error) {
		console.error("Error in deleteFile function:", error);
		return { error }
	}
}

export default deleteFile


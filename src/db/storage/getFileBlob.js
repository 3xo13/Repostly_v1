import dotenv from "dotenv"
dotenv.config();
import { GetObjectCommand } from '@aws-sdk/client-s3';
import s3Client from './s3Client.js';

const Bucket = process.env.S3_BUCKET;

const getFileBlob = async ( objectKey) => {
	try {
		const command = new GetObjectCommand({ Bucket, Key: objectKey });
		const { Body } = await s3Client.send(command);

		const chunks = [];
		for await (const chunk of Body) {
			chunks.push(chunk);
		}

		const blob = new Blob(chunks);

		return blob;
	} catch (error) {
		console.error('Error fetching object from S3:', error);
		throw error;
	}
};

export default getFileBlob;

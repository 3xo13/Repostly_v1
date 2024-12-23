import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Use __dirname with ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const deleteFile = async (fileName) => {
	try {
		const filePath = path.join(__dirname, 'temp', fileName);
		await fs.unlink(filePath);
		console.log(`File deleted: ${filePath}`);
	} catch (error) {
		console.error('Error deleting file:', error);
		throw error;
	}
};


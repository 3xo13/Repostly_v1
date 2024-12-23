import { connectToDB } from "@/db/connectToDB";
import OTP from "@/db/models/OTP";
 

export const checkForOTP = async (userId) => {
	const timeout = 180000; // 3 minutes in milliseconds
	const interval = 10000; // 10 seconds in milliseconds
	const endTime = Date.now() + timeout;

	return new Promise((resolve, reject) => {
		const checkInterval = setInterval(async () => {
			try {
				await connectToDB()
				const data = await OTP.findOne({ userId });

				if (data) {
					clearInterval(checkInterval);
					resolve(data.code); // Data found
				} else if (Date.now() > endTime) {
					clearInterval(checkInterval);
					reject(new Error('Data not found within 3 minutes')); // Timeout reached
				}
			} catch (error) {
				clearInterval(checkInterval);
				reject(error); // Handle query error
			}
		}, interval);
	});
};

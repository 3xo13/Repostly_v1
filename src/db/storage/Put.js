import Cors from 'cors';

const cors = Cors({
	methods: ['GET', 'PUT', 'POST'],
	origin: '*', // Adjust this to your needs
});

export async function put(url, file) {
	try {
		const data = Buffer.isBuffer(file) ? file : Buffer.from(await file.arrayBuffer());

		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Length": data.length,
				"Content-Type": file.type || "application/octet-stream",
				"Access-Control-Allow-Origin": "*"
			},
			body: data,
			referrerPolicy: "origin-when-cross-origin"
		});
			console.log("🚀 ~ put ~ response:", response)

		return response.ok;
	} catch (error) {
		console.error("🚀 ~put uploadFile ~ error:", error);
		return false;
	}
}

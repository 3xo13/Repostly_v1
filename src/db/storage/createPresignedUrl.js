import https from "https";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { fromIni } from "@aws-sdk/credential-providers";
// import { HttpRequest } from "@aws-sdk/protocol-http";
import {
	getSignedUrl,
	// S3RequestPresigner,
} from "@aws-sdk/s3-request-presigner";
// import { parseUrl } from "@aws-sdk/url-parser";
// import { formatUrl } from "@aws-sdk/util-format-url";
// import { Hash } from "@aws-sdk/hash-node";
import s3Client from "./s3Client";

const Region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;

// const createPresignedUrlWithoutClient = async ({ region, bucket, key }) => {
// 	const url = parseUrl(`https://${bucket}.s3.${region}.amazonaws.com/${key}`);
// 	const presigner = new S3RequestPresigner({
// 		credentials: fromIni(),
// 		region,
// 		sha256: Hash.bind(null, "sha256"),
// 	});

// 	const signedUrlObject = await presigner.presign(
// 		new HttpRequest({ ...url, method: "PUT" }),
// 	);
// 	return formatUrl(signedUrlObject);
// };

const createPresignedUrlWithClient = ({ bucket, key }) => {
	const command = new PutObjectCommand({ Bucket: bucket, Key: key });
	return getSignedUrl(s3Client, command, { expiresIn: 3600 });
};

function put(url, data) {
	return new Promise((resolve, reject) => {
		const req = https.request(
			url,
			{ method: "PUT", headers: { "Content-Length": new Blob([data]).size } },
			(res) => {
				let responseBody = "";
				res.on("data", (chunk) => {
					responseBody += chunk;
				});
				res.on("end", () => {
					resolve(responseBody);
				});
			},
		);
		req.on("error", (err) => {
			reject(err);
		});
		req.write(data);
		req.end();
	});
}

export const createPresignedUrl = async (filePath) => {
	// const REGION = "us-east-1";
	// const BUCKET = "example_bucket";
	const KEY = filePath;

	// There are two ways to generate a presigned URL.
	// 1. Use createPresignedUrl without the S3 client.
	// 2. Use getSignedUrl in conjunction with the S3 client and GetObjectCommand.
	try {
		// const noClientUrl = await createPresignedUrlWithoutClient({
		// 	region: REGION,
		// 	bucket: BUCKET,
		// 	key: KEY,
		// });

		const uploadUrl = await createPresignedUrlWithClient({
			// region: REGION,
			bucket: Bucket,
			key: KEY,
		});

		// After you get the presigned URL, you can provide your own file
		// data. Refer to put() above.
		// console.log("Calling PUT using presigned URL without client");
		// await put(noClientUrl, "Hello World");

		// console.log("Calling PUT using presigned URL with client");
		// await put(clientUrl, "Hello World");

		const s3FilePath = `https://${Bucket}.s3.${Region}.amazonaws.com/${KEY}`;

		// console.log("\nDone. Check your S3 console.");
		console.log("🚀 ~ createPresignedUrl ~ {uploadUrl, filePath}:", {uploadUrl, s3FilePath})
		return { uploadUrl, filePath: s3FilePath }
	} catch (err) {
		console.error(err);
		return err
	}
};

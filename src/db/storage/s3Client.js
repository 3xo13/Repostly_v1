import {S3Client} from "@aws-sdk/client-s3";

const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;

const s3Client = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
});

export default s3Client

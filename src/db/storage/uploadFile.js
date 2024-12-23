import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "./s3Client.js";

const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;

const uploadFile = async (file, directory) => {
    if (!file) {
        return { success: false }
    }
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    try {
        // get file extention from the file type
        // let fileExtention = file.type.split('/')[1];
        let fileExtention = file.name.slice(file.name.lastIndexOf(".") + 1)
        console.log("🚀 ~ uploadFile ~ fileExtention:", fileExtention)
        console.log("🚀 ~ uploadFile ~ file.type:", file)

        // replace any file extention that contains the subString "svg" with the string "svg"
        // const checkedForSVGs = fileExtention.includes('svg') ? 'svg' : fileExtention;

        const key = `uploads/${directory}/${new Date().getTime()}.${fileExtention}`

        // if file extention is svg change content type to 'image/svg+xml'
        // s3 seems not to be able to the content type correctly on these files
        let params = fileExtention == "svg" ? {
            Bucket,
            Key: key,
            Body: buffer,
            ContentType: 'image/svg+xml',
        } : {
                Bucket,
                Key: key,
                Body: buffer 
        }
        // create put command
        const uploadCommand = new PutObjectCommand(params);

        // send the put command (upload file)
        try {
            await s3Client.send(uploadCommand);
            const fileUrl = `https://${Bucket}.s3.${region}.amazonaws.com/${key}`;
            return (
                { success: true, message: 'File uploaded successfully', fileUrl }
            )
        } catch (error) {
            console.log("🚀 ~ uploadFile ~ error:", error)
            return (
                { success: false, message: 'Error uploading file to S3' }
            )
        }
    } catch (error) {
        console.log("🚀 ~ uploadFile ~ error:", error)
        return ({ error })
    }
}

export default uploadFile

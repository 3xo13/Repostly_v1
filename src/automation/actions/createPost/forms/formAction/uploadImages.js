import { waitForMilliseconds } from "@/automation/utils/waitForMilliseconds.js";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import mime from "mime-types";
import s3Client from "@/db/storage/s3Client";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import extractS3KeysFromUrls from "@/db/storage/tempFiles/extractS3keysFromUrls";

const Bucket = process.env.S3_BUCKET;

export const uploadImages = async (page, fileUrls) => {
    if (!fileUrls.length) {
        return;
    }

    const s3FileKeys = extractS3KeysFromUrls(fileUrls);

    console.log("🚀 ~ uploadImages ~ s3FileKeys:", s3FileKeys);

    try {
        const filesDataPromises = s3FileKeys.map(async (s3Key) => {
            try {
                const params = {
                    Bucket,
                    Key: s3Key
                };
                const command = new GetObjectCommand(params);
                const data = await s3Client.send(command);
                const fileName = s3Key.split('/').pop();
                console.log("🚀 ~ filesDataPromises ~ fileName:", fileName);
                const fileType = mime.lookup(fileName);
                console.log("🚀 ~ filesDataPromises ~ fileType:", fileType);
                const fileArray = Array.from(new Uint8Array(data.Body));
                return { fileName, fileType, fileArray };
            } catch (error) {
                console.error(`Error fetching file from S3 for key: ${s3Key}`, error.message);
                throw error;
            }
        });

        const filesData = await Promise.all(filesDataPromises);

        await page.evaluate((filesData) => {
            const input = document.querySelector('input[type=file]');
            const dataTransfer = new DataTransfer();
            filesData.forEach(({ fileName, fileType, fileArray }) => {
                const fileBuffer = new Uint8Array(fileArray);
                const blob = new Blob([fileBuffer], { type: fileType });
                const file = new File([blob], fileName, { type: fileType });
                dataTransfer.items.add(file);
            });
            input.files = dataTransfer.files;
            const event = new Event('change', { bubbles: true });
            input.dispatchEvent(event);
        }, filesData);

        await waitForMilliseconds(5000);

        await takeScreenshot(page, "newPost", "imagesUploaded");

        await waitForMilliseconds(5000);

        return true;

    } catch (error) {
        console.log("🚀 ~ uploadImages ~ error:", error);
        return false;
    }
};
